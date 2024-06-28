import SocialIcon from "@/components/SocialIcon";

import { iconPaths } from "../api";

/**
 * Github
 * @component Github
 */
const Github = () => <SocialIcon iconName="brand-github" paths={iconPaths.github} />;

/**
 * LinkedIn
 * @component LinkedIn
 */
const LinkedIn = () => <SocialIcon iconName="brand-linkedin" paths={iconPaths.linkedin} />;

/**
 * Mastodon
 * @component Mastodon
 */
const Mastodon = () => <SocialIcon iconName="brand-mastodon" paths={iconPaths.mastodon} />;

/**
 * Message2Share
 * @component Message2Share
 */
const Message2Share = () => <SocialIcon iconName="message-share" paths={iconPaths.message} />;

/**
 * SocialIcons
 * @component SocialIcons
 */
export { Github, LinkedIn, Mastodon, Message2Share };
