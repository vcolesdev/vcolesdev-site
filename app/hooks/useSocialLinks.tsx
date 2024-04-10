//import {SVGProps} from "react";
import {
  IconBrandGithubFilled,
  IconBrandLinkedin,
  IconBrandMastodon,
  IconMessage2Share,
} from "@tabler/icons-react";
import React from "react";

const socialLinks = [
  {
    name: "Github",
    href: "/",
    icon: (): React.ReactNode => <IconBrandGithubFilled stroke={2} />,
  },
  {
    name: "LinkedIn",
    href: "/",
    icon: (): React.ReactNode => <IconBrandLinkedin stroke={2} />,
  },
  {
    name: "Mastodon",
    href: "/",
    icon: (): React.ReactNode => <IconBrandMastodon stroke={2} />,
  },
  {
    name: "Message",
    href: "/",
    icon: (): React.ReactNode => <IconMessage2Share stroke={2} />,
  },
];

/**
 * useSocialLinks hook
 * @description Returns an array of objects containing the href, name, and icon for personal social medial links.
 */
const useSocialLinks = () => socialLinks;
export default useSocialLinks;
