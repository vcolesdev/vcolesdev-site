import SectionHeader from "@/components/Section/_Header";
import SectionContainer from "@/components/Section/_Container";
import SectionHeaderContainer from "@/components/Section/_HeaderContainer";
//import FeaturedPost from "~/modules/FeaturedPost";
import FeaturedCta from "@/modules/FeaturedCta/FeaturedCta";
//import {FeaturedTestPost} from "~/types/Posts";
//import {generateRandomKey} from "~/utils";

export default function FeaturedPosts({posts}: {posts: any[]}) {
  //const firstTwoPosts = posts.slice(0, 2);
  //const lastTwoPosts = posts.slice(2, 4);
  //const key = generateRandomKey();

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
      <div className="mx-auto max-w-7xl px-8">
        <p className="text-2xl font-cursive font-semibold">Coming Soon... 👋</p>
      </div>
      {/* Featured Posts
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-12 lg:grid-cols-2 lg:gap-y-12">
        <div className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
          <div>
            {firstTwoPosts.map((post) => (
              <FeaturedPost key={key} post={post} />
            ))}
          </div>
        </div>
        <div className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
          <div>
            {lastTwoPosts.map((post) => (
              <FeaturedPost key={key} post={post} />
            ))}
          </div>
        </div>
      </div>
      */}
    </SectionContainer>
  );
}
