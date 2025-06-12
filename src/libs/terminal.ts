const stampHandlers: {
  [key: string]: (input: string, stamp: string) => string;
} = {
  clear: (input: string, stamp: string): string => {
    const stampIndex = input.indexOf(stamp);
    return input.substring(stampIndex + stamp.length);
  },
};

export function processStamps(input: string): string {
  let containsStamp = false;

  const keys = Object.keys(stampHandlers);

  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const stamp = `**${key}**`;

    if (input.includes(stamp)) {
      containsStamp = true;
      input = stampHandlers[key](input, stamp);
    }
  }

  if (containsStamp) {
    input = processStamps(input);
  }

  return input;
}
