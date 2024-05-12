"use client";

import {
  Github,
  LinkedIn,
  Mastodon,
  Message2Share,
} from "@/components/SocialIcon/SocialIcons";
import {ReactNode} from "react";

/**
 * useSocialLinks hook
 * @description Returns an array of objects containing the href, name, and icon for personal social medial links.
 */
export default function useFetchSocialLinks() {
  return [
    {
      name: "Github",
      href: "https://github.com/vcolesdev",
      icon: (): ReactNode => <Github />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/vanessa-coles/",
      icon: (): ReactNode => <LinkedIn />,
    },
    {
      name: "Mastodon",
      href: "https://mastodon.social/@vcolesdev",
      icon: (): ReactNode => <Mastodon />,
    },
    {
      name: "Message",
      href: "/",
      icon: (): ReactNode => <Message2Share />,
    },
  ];
}
