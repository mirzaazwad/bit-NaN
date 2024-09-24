export function removeDuplicates<T>(array: T[]): T[] {
  const seen = new Set<string>();
  return array.filter((item) => {
    const serializedItem = JSON.stringify(item);
    if (seen.has(serializedItem)) {
      return false;
    }
    seen.add(serializedItem);
    return true;
  });
}

export function isDuplicate<T>(array: T[], message: T): boolean {
  const seen = new Set<string>();
  const len = array.length;
  const searchSerializedItem = JSON.stringify(message);
  for (let i = 0; i < len; i++) {
    const item = array[i];
    const serializedItem = JSON.stringify(item);
    seen.add(serializedItem);
    if (seen.has(searchSerializedItem)) {
      return true;
    }
  }
  return false;
}
