/**
 * useNavLinks hook
 * @description Returns an array of objects containing the href and text for the navigation links.
 */
const useNavLinks = () => {
  return [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "My Stuff",
      href: "/projects",
    },
    {
      name: "Writings",
      href: "/posts",
    },
    {
      name: "Photos",
      href: "/photos",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
};

export default useNavLinks;
