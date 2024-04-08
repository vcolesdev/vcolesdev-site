export function truncateText(text: string, length: number) {
  return text.length > length ? text.slice(0, length) + "..." : text;
}

export function generateRandomKey() {
  return Math.random().toString(36).substring(7);
}
