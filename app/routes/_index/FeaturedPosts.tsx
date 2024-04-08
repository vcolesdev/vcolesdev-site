import SectionHeader from "~/components/SectionHeader";
import SectionContainer from "~/components/SectionContainer";
import SectionHeaderContainer from "~/components/SectionHeaderContainer";
import FeaturedPost from "~/modules/Featured/FeaturedPost";
import FeaturedCta from "~/modules/Featured/FeaturedCta";
import {FeaturedTestPost} from "~/types/Posts";

export default function SectionFeaturedPosts({posts}: {posts: FeaturedTestPost[];}) {
  const firstTwoPosts = posts.slice(0, 2);
  const lastTwoPosts = posts.slice(2, 4);

  return (
    <SectionContainer extraClasses="mb-12 lg:mb-24">
      <SectionHeaderContainer>
        <SectionHeader
          hasEyebrow
          eyebrowText="Featured Posts"
          title="Writings"
          description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
        />
        <FeaturedCta hasIcon ctaText="View All Posts" href="/posts" />
      </SectionHeaderContainer>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-12 lg:grid-cols-2 lg:gap-y-12">
        <div className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
          <div>
            {firstTwoPosts.map((post) => (
              <FeaturedPost key={post.id} post={post} />
            ))}
          </div>
        </div>
        <div className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
          <div>
            {lastTwoPosts.map((post) => (
              <FeaturedPost key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
