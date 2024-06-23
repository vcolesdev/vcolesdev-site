import { FooterContent, FooterCopyright, FooterCopyrightContainer, FooterSocialLinksContainer } from "./components";
import FooterSocialLinks from "./components/FooterSocialLinks";

/**
 * Footer
 * @module Footer
 */
export default function Footer() {
  return (
    <footer id="siteFooterMain">
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
