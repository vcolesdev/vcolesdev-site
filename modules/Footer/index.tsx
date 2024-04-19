import FooterContent from "./parts/_Content";
import FooterCopyright from "./parts/_Copyright";
import FooterSocialLinks from "./parts/_SocialLinks";
import CopyrightSlot from "./slots/CopyrightSlot";
import SocialLinksSlot from "./slots/SocialLinksSlot";

/**
 * Footer module
 */
export default function Footer() {
  return (
    <footer id="siteFooterMain">
      <FooterContent>
        <SocialLinksSlot>
          <FooterSocialLinks />
        </SocialLinksSlot>
        <CopyrightSlot>
          <FooterCopyright />
        </CopyrightSlot>
      </FooterContent>
    </footer>
  );
}
