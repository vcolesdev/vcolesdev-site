"use client";

import GithubPhoto from "@/assets/images/vcoles-github.jpeg";
import SplitCard from "@/modules/SplitCard";
import { SectionContent } from "@/utils/types/layout";

const content: SectionContent = {
  ctaLink: "/about",
  ctaText: "Keep Reading",
  description: `But you can call me Van. 👋🏼 I'm a Full-Stack Engineer based in sunny San Diego, CA.  I have over a decade of industry experience and have worked with various languages and stacks, currently enjoying working with React, Node, Python, and MongoDB.`,
  eyebrowText: "About Me",
  imageAlt: "Vanessa's Github",
  title: "Hi, I'm Vanessa",
};

export default function FeaturedAbout() {
  return <SplitCard image={GithubPhoto} content={content} />;
}
