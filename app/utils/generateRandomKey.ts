export default function generateRandomKey() {
  return Math.random().toString(36).substring(7);
}