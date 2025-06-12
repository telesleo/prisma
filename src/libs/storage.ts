import type { Directory } from "../types/directory";
import { pathBranch, pathLeaf, segmentPath } from "./path";

export default class Storage {
  storage: Directory = {
    commands: {
      echo: `(function (args, output) {
  output(args.join(" "));
})

# output the given arguments
#
# EXAMPLES
#   input: echo "Hello, World!"
#   output: Hello, World!
  `,
      clear: `(function (args, output) {
  output("**" + "clear" + "**");
})

# remove all terminal logs
`,
      doc: `(function (args, output) {
  const commandKey = args[0];
  const commandFile = storage.getEntry(\`/commands/\${commandKey}\`);

  if (commandFile === null) {
    output(messages.notACommand(commandKey));
    return;
  }

  const documentation = commandFile.match(/^#.*$/gm).map((line) => line.substring(2)).join("\\n");

  output(documentation);
})
  
# show the documentation of a given command
`,
      peek: `(function (args, output) {
  const relativePath = args[0] || "./";
  const path = resolvePath(this.path, relativePath);
  const entry = storage.getEntry(path);

  if (entry === null) {
    output(messages.notAnEntry(path));
    return;
  }

  if (typeof entry === "object") {
    output(Object.keys(entry).join(" "));
    return;
  }

  output(entry);
})
  
# show the content of a given entry
#
# EXAMPLES
#   input: peek greetings/hello-world
#   output: Hello, World!
`,
      dir: `(function (args, output) {
  const relativePath = args[0] || "./";
  const path = resolvePath(this.path, relativePath);

  const directory = storage.getEntry(path);

  if (directory === null || typeof directory === "string") {
    output(messages.notADirectory(path));
    return;
  }

  this.path = path;
  output(this.path);
})

# change and display the current directory
`,
      new: `(function (args, output) {
  const isDirectory = args.includes("-directory") || args.includes("-d");

  args = args.filter((arg) => !arg.startsWith("-"));

  const relativePath = args[0] || "./";
  const path = resolvePath(this.path, relativePath);

  const content = isDirectory ? [] : args[1] || "";

  const status = storage.createEntry(path, content);

  if (status === 1) {
    output(messages.invalidPath(path));
    return;
  }

  if (status === 2) {
    output(messages.alreadyExists(path));
    return;
  }
})
  
# create a new file or directory
#
# EXAMPLES
#   input: new new-file "Content of the file"
#
#   input: new -d new-directory
`,
      remove: `(function (args, output) {
  const relativePath = args[0] || "./";
  const path = resolvePath(this.path, relativePath);
  const status = storage.removeEntry(path);

  if ([1, 2].includes(status)) {
    output(messages.doesNotExist(path));
    return;
  }
})

# remove a given entry
`,
      edit: `(function (args, output) {
  const relativePath = args[0] || "./";
  const path = resolvePath(this.path, relativePath);
  const content = args[1] || "";
  const status = storage.editFile(path, content);

  if ([1, 2].includes(status)) {
    output(messages.doesNotExist(path));
    return;
  }
})

# edit a given file
#
# EXAMPLE
#   input: edit /greetings/hi "Hey!"
`,
      prisma: `(function (args, output) {
  output(\`<span style="color: var(--white);"  >  /\\\\                 </span>
<span style="color: var(--cyan);"  > /  \\\\   Prisma Web OS</span>
<span style="color: var(--magenta);"   >/____\\\\               </span>

Platform: \${navigator.platform}
CPU Cores: \${navigator.hardwareConcurrency}

Resolution: \${window.innerWidth}x\${window.innerHeight}
Language: \${navigator.language}
Cookies: \${navigator.cookieEnabled}\`);
})

# display information about the system
`,
      calc: `(function (args, output) {
  try {
    const expression = args.join(" ") || "0";
    const result = mathjs.evaluate(expression);
    output(result.toString());
  } catch {
    output(\`expression "\${expression}" is not valid\`);
  }
})

# evaluate a given expression
#
# EXAMPLES
#   input: calc 1 + 1
#   output: 2
`,
    },
  };

  getStorage() {
    return this.storage;
  }

  setStorage(newStorage: Directory) {
    this.storage = newStorage;
  }

  getEntry(path: string): Directory | string | null {
    const pathSegments = segmentPath(path);

    let currentEntry: Directory | string = this.storage;

    for (const pathSegment of pathSegments) {
      if (
        typeof currentEntry !== "object" ||
        currentEntry === null ||
        !(pathSegment in currentEntry)
      ) {
        return null;
      }

      currentEntry = currentEntry[pathSegment];
    }

    return currentEntry;
  }

  createEntry(path: string, content: Directory | string): number {
    if (path === "/") {
      return 2;
    }

    const parentPath = pathBranch(path);
    const parentDirectory = this.getEntry(parentPath) as Directory;

    if (parentDirectory === null) {
      return 1;
    }

    const name = pathLeaf(path);

    if (name in parentDirectory) {
      return 2;
    }

    parentDirectory[name] = content;
    return 0;
  }

  removeEntry(path: string): number {
    if (path === "/") {
      this.storage = {};
      return 0;
    }

    const parentPath = pathBranch(path);
    const parentDirectory = this.getEntry(parentPath) as Directory;

    if (parentDirectory === null) {
      return 1;
    }

    const entryName = pathLeaf(path);

    if (!(entryName in parentDirectory)) {
      return 2;
    }

    delete parentDirectory[entryName];
    return 0;
  }

  editFile(path: string, content: string): number {
    const parentPath = pathBranch(path);
    const parentDirectory = this.getEntry(parentPath) as Directory;

    if (parentDirectory === null) {
      return 1;
    }

    const fileName = pathLeaf(path);

    if (!(fileName in parentDirectory)) {
      return 2;
    }

    parentDirectory[fileName] = content;
    return 0;
  }
}
