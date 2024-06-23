import SocialIcon from "@/components/SocialIcon/index";

import iconPaths from "./iconPaths";

const Github = () => <SocialIcon iconName="brand-github" paths={iconPaths.github} />;

const LinkedIn = () => <SocialIcon iconName="brand-linkedin" paths={iconPaths.linkedin} />;

const Mastodon = () => <SocialIcon iconName="brand-mastodon" paths={iconPaths.mastodon} />;

const Message2Share = () => <SocialIcon iconName="message-share" paths={iconPaths.message} />;

export { Github, LinkedIn, Mastodon, Message2Share };
