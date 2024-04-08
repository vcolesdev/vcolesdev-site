import SocialLinks from "~/modules/SocialLinks";

function IntroTitle({ title }: { title: string }) {
  return (
    <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
      {title}
    </h2>
  );
}

function IntroText({ text }: { text: string }) {
  return (
    <p className="mt-6 text-lg leading-8 text-rosy_brown-200/70">{text}</p>
  );
}

function IntroFeaturedImage({ imgSrc }: { imgSrc: string }) {
  return (
    <div className="mt-16 flow-root sm:mt-24">
      <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
        <img
          src={imgSrc}
          alt="App screenshot"
          width={2432}
          height={1442}
          className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
        />
      </div>
    </div>
  );
}

export default function SectionIntro({
  featuredImageSrc,
  hasFeaturedImage = false,
}: {
  featuredImageSrc?: string;
  hasFeaturedImage?: boolean;
}) {
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <IntroTitle title="Welcome to My Space" />
        <IntroText text="Welcome to my personal space on the web. I'm a software engineer and web developer with a passion for creating and building things." />
      </div>
      <div className="mt-12 flex justify-center">
        <SocialLinks />
      </div>
      {hasFeaturedImage && featuredImageSrc && (
        <IntroFeaturedImage imgSrc={featuredImageSrc} />
      )}
    </div>
  );
}
