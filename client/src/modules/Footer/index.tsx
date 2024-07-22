import { FooterContent, FooterCopyright, FooterCopyrightContainer, FooterSocialLinksContainer } from "./components";
import FooterSocialLinks from "./components/FooterSocialLinks";

const FOOTER_ID = "siteFooterMain";

/**
 * Footer
 * @module Footer
 */
export default function Footer() {
  return (
    <footer id={FOOTER_ID}>
      <FooterContent>
        <FooterSocialLinksContainer>
          <FooterSocialLinks />
        </FooterSocialLinksContainer>
        <FooterCopyrightContainer>
          <FooterCopyright />
        </FooterCopyrightContainer>
      </FooterContent>
    </footer>
  );
}
