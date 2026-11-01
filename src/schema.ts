import type { BlogPosting, Person, ProfilePage, Thing, WebSite } from "schema-dts";
import type { CollectionEntry } from "astro:content";
import { HOME, SITE, SOCIALS } from "@consts";
import { OG_IMAGE } from "@lib/og";

const url = (path: string) => new URL(path, SITE.URL).href;

const PERSON_ID = url("/#person");
const WEBSITE_ID = url("/#website");

export const PERSON: Person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: SITE.NAME,
  givenName: "Ryan",
  familyName: "Xu",
  url: url("/"),
  image: OG_IMAGE?.url,
  description: HOME.DESCRIPTION,
  jobTitle: "Undergraduate Researcher",
  affiliation: [
    {
      "@type": "CollegeOrUniversity",
      name: "Harvard University",
      url: "https://www.harvard.edu/",
    },
    {
      "@type": "ResearchOrganization",
      name: "Kempner Institute for the Study of Natural and Artificial Intelligence",
      url: "https://kempnerinstitute.harvard.edu/",
    },
  ],
  award: ["FIRST World Championship Division Inspire Award Winner (2024, 2026)", "Regeneron Science Talent Search Scholar (2026)", "Regeneron ISEF 4th/3rd Grand Award Winner (2024/2025)"],
  knowsAbout: [
    "Embodied AI",
    "Coding agents",
    "Robotics",
    "Vision-language-action models",
    "World action models",
    "3D scene reconstruction",
    "4D scene reconstruction",
    "Computer vision",
  ],
  sameAs: SOCIALS.map((social) => social.HREF).filter((href) => href.startsWith("http")),
};

export const WEBSITE: WebSite = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: url("/"),
  name: SITE.NAME,
  description: HOME.DESCRIPTION,
  inLanguage: "en",
  author: { "@id": PERSON_ID },
};

export const PROFILE_PAGE: ProfilePage = {
  "@type": "ProfilePage",
  "@id": url("/#profile"),
  url: url("/"),
  isPartOf: { "@id": WEBSITE_ID },
  mainEntity: { "@id": PERSON_ID },
};

export function blogPosting(post: CollectionEntry<"blog">): BlogPosting {
  const postURL = url(`/blog/${post.id}/`);
  return {
    "@type": "BlogPosting",
    "@id": `${postURL}#article`,
    url: postURL,
    mainEntityOfPage: postURL,
    headline: post.data.title,
    description: post.data.description,
    datePublished: post.data.date.toISOString(),
    image: OG_IMAGE?.url,
    inLanguage: "en",
    author: { "@id": PERSON_ID },
    isPartOf: { "@id": WEBSITE_ID },
  };
}

export const SITE_GRAPH: Thing[] = [WEBSITE, PERSON];
