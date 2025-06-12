// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as mathjs from "mathjs";
import { splitByValue } from "./array";
import { tokenize } from "./command";
import messages from "./messages";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { resolvePath } from "./path";
import type Storage from "./storage";

export default class CommandCore {
  static groupSeparator = "&&";
  static segmentSeparator = ">>";

  path: string = "/";

  executeSegments(
    [segment, ...remainingSegments]: string[][],
    input: string,
    finalOutput: (value: string) => void,
    storage: Storage
  ) {
    if (!segment) {
      return;
    }

    const [key, ...args] = segment;
    const commandCode = storage.getEntry(`/commands/${key}`);

    if (typeof commandCode !== "string") {
      finalOutput(messages.notACommand(key));
      return;
    }

    const nextOutput = remainingSegments.length
      ? (value: string) =>
          this.executeSegments(remainingSegments, value, finalOutput, storage)
      : finalOutput;

    try {
      const command = eval(commandCode.replace(/^#.*$/gm, ""));
      command.call(this, [...args, input], nextOutput);
    } catch (error) {
      console.error(error);
      finalOutput(messages.curruptedCommand(key));
      return;
    }
  }

  executeGroup(
    tokens: string[],
    output: (value: string) => void,
    storage: Storage
  ) {
    const segments = splitByValue(tokens, CommandCore.segmentSeparator);
    this.executeSegments(segments, "", output, storage);
  }

  executeGroups(
    groups: string[][],
    output: (value: string) => void,
    storage: Storage
  ) {
    for (let index = 0; index < groups.length; index++) {
      const groupTokens = groups[index];
      this.executeGroup(groupTokens, output, storage);
    }
  }

  execute(line: string, output: (value: string) => void, storage: Storage) {
    const tokens = tokenize(line);
    const groups = splitByValue(tokens, CommandCore.groupSeparator);

    this.executeGroups(groups, output, storage);
  }
}
