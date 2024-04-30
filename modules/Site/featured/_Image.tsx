import Image from "next/image";
import classNames from "classnames";
import {ReactChildren} from "@/utils/types/layout";

const divOneClipPath = "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)";
const divTwoClipPath = "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)";

const styles = {
  wrapper: classNames([
    "relative",
    "isolate",
    "mb-12",
    "min-h-screen",
    "overflow-hidden",
    "lg:mb-24"
  ]),
  image: classNames([
    "absolute",
    "inset-0",
    "-z-10",
    "h-full",
    "w-full",
    "object-cover"
  ]),
  divOne: {
    styles: classNames([
      "absolute",
      "inset-x-0",
      "-top-40",
      "-z-10",
      "transform-gpu",
      "overflow-hidden",
      "blur-3xl",
      "sm:-top-80"
    ]),
    child: classNames([
      "relative",
      "left-[calc(50%-11rem)]",
      "aspect-[1155/678]",
      "w-[36.125rem]",
      "-translate-x-1/2",
      "rotate-[30deg]",
      "bg-gradient-to-tr",
      "from-[#ff80b5]",
      "to-[#9089fc]",
      "opacity-20",
      "sm:left-[calc(50%-30rem)]",
      "sm:w-[72.1875rem]"
    ])
  },
  divTwo: {
    styles: classNames([
      "absolute",
      "inset-x-0",
      "top-[calc(100%-13rem)]",
      "-z-10",
      "transform-gpu",
      "overflow-hidden",
      "blur-3xl",
      "sm:top-[calc(100%-30rem)]"
    ]),
    child: classNames([
      "relative",
      "left-[calc(50%+3rem)]",
      "aspect-[1155/678]",
      "w-[36.125rem]",
      "-translate-x-1/2",
      "bg-gradient-to-tr",
      "from-[#ff80b5]",
      "to-[#9089fc]",
      "opacity-20",
      "sm:left-[calc(50%+36rem)]",
      "sm:w-[72.1875rem]"
    ])
  }
}

const DivTransforms = () => (
  <>
    <div className={styles.divOne.styles} aria-hidden="true">
      <div className={styles.divOne.child} style={{clipPath: divOneClipPath}} />
    </div>
    <div className={styles.divTwo.styles} aria-hidden="true">
      <div className={styles.divTwo.child} style={{clipPath: divTwoClipPath}} />
    </div>
  </>
)

const ImageTransformWrapper = ({children}: {children: ReactChildren}) => (
  <section className={styles.wrapper}>
    {children}
    <DivTransforms />
  </section>
)

const FeaturedImage = (props: {imgSrc: string}) => (
  <ImageTransformWrapper>
    <Image
      alt="Large featured image"
      className={styles.image}
      src={props.imgSrc}
    />
  </ImageTransformWrapper>
);

export default FeaturedImage;
