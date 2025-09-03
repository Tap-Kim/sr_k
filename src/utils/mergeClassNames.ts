export function mergeClassNames(...strs: (string | undefined)[]) {
  const result = strs.reduce<string>((merged, str) => {
    return merged + (str ? ` ${str}` : "");
  }, "");

  return result;
}
