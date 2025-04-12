import { useMediaQuery } from "usehooks-ts";

/**
 * Returns true if the viewport width is less than 640px (Tailwind's "sm").
 */
export const useMobile = () => useMediaQuery("(max-width: --s)");