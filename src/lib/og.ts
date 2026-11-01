import { getImage } from "astro:assets";
import { SITE } from "@consts";
import { headshot } from "@lib/utils";

const OG_IMAGE_SIZE = 1200;

const image = headshot && await getImage({
  src: headshot,
  width: OG_IMAGE_SIZE,
  height: OG_IMAGE_SIZE,
  format: "jpg",
});

export const OG_IMAGE = image && {
  url: new URL(image.src, SITE.URL).href,
  width: OG_IMAGE_SIZE,
  height: OG_IMAGE_SIZE,
  alt: `Headshot of ${SITE.NAME}`,
};
