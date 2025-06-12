export function segmentPath(path: string): string[] {
  const trimmedPath = path.trim().replace(/^\/+|\/+$/g, "");
  return trimmedPath ? trimmedPath.split("/") : [];
}

export function resolvePath(base: string, relative: string): string {
  if (!base.endsWith("/")) base += "/";
  const resolved = new URL(relative, "file://" + base);
  return resolved.pathname;
}

export function pathBranch(path: string) {
  const pathSegments = segmentPath(path);
  return pathSegments.slice(0, -1).join("/");
}

export function pathLeaf(path: string) {
  const pathSegments = segmentPath(path);
  return pathSegments[pathSegments.length - 1];
}
