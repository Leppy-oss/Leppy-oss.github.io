import type { Site, Metadata, Socials, Experience } from "@types";

export const SITE: Site = {
  NAME: "Ryan Xu",
  URL: "https://ryanxu.me",
  GITHUB_USERNAME: "Leppy-oss",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  PLAYGROUND_COLUMNS: 3,
  PLAYGROUND_COLUMNS_MOBILE: 2,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Personal website of Ryan Xu.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A place for my notes.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Selected projects I've worked on.",
};

export const PLAYGROUND: Metadata = {
  TITLE: "Playground",
  DESCRIPTION: "A collection of playful mini-projects.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/Leppy-oss"
  },
  {
    NAME: "linkedin",
    HREF: "https://linkedin.com/in/rjxu"
  },
  {
    NAME: "email",
    HREF: "mailto:ryanxu@college.harvard.edu"
  }
];

export const EXPERIENCE: Experience = [
  {
    ROLE: "placeholder",
    ORG: "placeholder",
    HREF: "placeholder",
    DATES: "placeholder"
  },
];
