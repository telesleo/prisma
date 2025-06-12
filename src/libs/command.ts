export function tokenize(input: string) {
  return [...input.matchAll(/"[^"]*"|[^\s]+/g)].map((match) =>
    match[0].replace(/^"(.*)"$/, "$1")
  );
}
