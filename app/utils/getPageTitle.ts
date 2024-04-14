export default function getPageTitle(defaultTitle: string, custom?: string) {
  return custom || defaultTitle;
}