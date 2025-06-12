export function invalidPath(path: string) {
  return `"${path}" is not a valid path`;
}

export function notAnEntry(path: string) {
  return `"${path}" is not an entry`;
}

export function alreadyExists(path: string) {
  return `entry "${path}" already exists`;
}

export function doesNotExist(path: string) {
  return `entry "${path}" does not exist`;
}

export function notADirectory(path: string) {
  return `"${path}" is not a directory`;
}

export function notACommand(key: string) {
  return `"${key}" is not a command`;
}

export function curruptedCommand(key: string) {
  return `command "${key}" is currupted`;
}

export default {
  invalidPath,
  notAnEntry,
  alreadyExists,
  doesNotExist,
  notADirectory,
  notACommand,
  curruptedCommand,
};
