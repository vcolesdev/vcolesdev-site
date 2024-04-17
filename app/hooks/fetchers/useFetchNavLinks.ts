import {NavLinks} from "~/types/Navigation";

/**
 * useNavLinks hook
 * @description Returns an array of objects containing the href and text for the navigation links.
 */
const useFetchNavLinks = () => {
  const links: NavLinks = [
    {name: "Home", href: "/"},
    {name: "About", href: "/about"},
    {name: "My Stuff", href: "/projects"},
    {name: "Writings", href: "/posts"},
    {name: "Photos", href: "/photos"},
    {name: "Contact", href: "/contact"},
  ];

  return links;
};

export default useFetchNavLinks;
