export function isExternal(href: string, site: string) {
  const url = new URL(href, site);
  return url.protocol.startsWith("http") && url.origin !== new URL(site).origin;
}
