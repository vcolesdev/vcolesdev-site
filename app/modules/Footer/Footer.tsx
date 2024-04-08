import FooterCopyright from "./FooterCopyright";
import FooterSocialLinks from "./FooterSocialLinks";

/**
 * Footer component
 * @constructor
 */
export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <FooterSocialLinks />
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
}
