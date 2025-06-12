export function splitByValue(array: any[], value: any): any[][] {
  const result: any[][] = [];
  let current: any[] = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (element === value) {
      result.push(current);
      current = [];
    } else {
      current.push(element);
    }
  }

  if (current.length > 0) {
    result.push(current);
    current = [];
  }

  return result;
}
