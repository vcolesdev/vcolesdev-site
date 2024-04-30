import styles from "./styles.module";
import SectionHeader from "@/components/Section/_Header";
import SectionContainer from "@/components/Section/_Container";
import SectionHeaderContainer from "@/components/Section/_HeaderContainer";
import FeaturedCta from "@/components/Controls/FeaturedCta";

const content = {
  ctaText: "View All Posts",
  ctaLink: "/posts",
  description: "Coming Soon. Having experienced a majority of adolescence in the early 2000's, writing for the web has always come naturally. Below are a few of my favorite posts.",
  eyebrowText: "Featured Posts",
  title: "Writings",
};

const FeaturedPostsContainer = SectionContainer;
const FeaturedPostsHeaderContainer = SectionHeaderContainer;
const FeaturedPostsHeader = SectionHeader;
const FeaturedPostsCta = FeaturedCta;

const FeaturedPosts = ({posts}: {posts: any[]}) => (
  <FeaturedPostsContainer extraClasses={styles.container}>
    <FeaturedPostsHeaderContainer>
      <FeaturedPostsHeader
        hasEyebrow
        eyebrowText={content.eyebrowText}
        title={content.title}
        description={content.description}
      />
      <FeaturedPostsCta
        hasIcon
        ctaText={content.ctaText}
        href={content.ctaLink}
      />
    </FeaturedPostsHeaderContainer>
  </FeaturedPostsContainer>
);

export default FeaturedPosts;
