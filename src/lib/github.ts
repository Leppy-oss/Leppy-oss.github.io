import type { Loader } from "astro/loaders";
import { getSecret } from "astro:env/server";
import { parse } from "yaml";

type Repository = {
  name: string;
  url: string;
  createdAt: string;
  defaultBranchRef: { target: { oid: string } } | null;
  portfolio: { text: string } | null;
};

type Page = {
  user: {
    repositories: {
      pageInfo: { hasNextPage: boolean; endCursor: string | null };
      nodes: Repository[];
    };
  };
};

const query = `
  query ($owner: String!, $cursor: String) {
    user(login: $owner) {
      repositories(first: 100, after: $cursor, privacy: PUBLIC, ownerAffiliations: OWNER, isFork: false) {
        pageInfo { hasNextPage endCursor }
        nodes {
          name
          url
          createdAt
          defaultBranchRef { target { oid } }
          portfolio: object(expression: "HEAD:portfolio.yaml") { ... on Blob { text } }
        }
      }
    }
  }
`;

const requests = new Map<string, Promise<Repository[]>>();

async function fetchRepositories(owner: string, token: string) {
  const repositories: Repository[] = [];
  let cursor: string | null = null;

  do {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { owner, cursor } }),
    });
    const body = (await response.json()) as { data?: Page; errors?: { message: string }[] };
    if (!response.ok || !body.data) {
      throw new Error(body.errors?.map((error) => error.message).join("; ") ?? response.statusText);
    }
    const { nodes, pageInfo } = body.data.user.repositories;
    repositories.push(...nodes.filter((repository) => repository.portfolio));
    cursor = pageInfo.hasNextPage ? pageInfo.endCursor : null;
  } while (cursor);

  return repositories;
}

function resolveAsset(owner: string, repository: Repository, path: unknown) {
  if (typeof path !== "string" || /^https?:\/\//.test(path)) {
    return path;
  }
  const ref = repository.defaultBranchRef?.target.oid ?? "HEAD";
  return `https://raw.githubusercontent.com/${owner}/${repository.name}/${ref}/${path.replace(/^\.?\//, "")}`;
}

export function githubLoader({ owner, kind }: { owner: string; kind: "project" | "playground" }): Loader {
  return {
    name: "github-loader",
    load: async ({ store, parseData, generateDigest, logger }) => {
      const token = getSecret("GITHUB_TOKEN");
      if (!token) {
        const message = "GITHUB_TOKEN is not set, so projects can't be loaded from GitHub";
        if (process.env.CI) {
          throw new Error(message);
        }
        logger.warn(message);
        return;
      }

      let repositories: Repository[];
      try {
        if (!requests.has(owner)) {
          requests.set(owner, fetchRepositories(owner, token));
        }
        repositories = await requests.get(owner)!;
      } catch (error) {
        requests.delete(owner);
        if (process.env.CI) {
          throw error;
        }
        logger.warn(`Couldn't load projects from GitHub: ${(error as Error).message}`);
        return;
      }

      store.clear();
      for (const repository of repositories) {
        const metadata = parse(repository.portfolio!.text) ?? {};
        if (metadata.kind !== kind) {
          continue;
        }
        const data = await parseData({
          id: repository.name,
          data: {
            ...metadata,
            date: metadata.date ?? repository.createdAt,
            thumbnail: resolveAsset(owner, repository, metadata.thumbnail),
            repoURL: repository.url,
          },
        });
        store.set({ id: repository.name, data, digest: generateDigest(data) });
      }
    },
  };
}
