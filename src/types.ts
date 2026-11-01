export type Site = {
  NAME: string;
  URL: string;
  GITHUB_USERNAME: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
  PLAYGROUND_COLUMNS: number;
  PLAYGROUND_COLUMNS_MOBILE: number;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];

export type Experience = {
  ROLE: string;
  ORG: string;
  HREF?: string;
  DATES: string;
}[];
