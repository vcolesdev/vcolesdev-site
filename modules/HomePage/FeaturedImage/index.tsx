import Image from "next/image";
import styles from "./styles.module";
import {ReactChildren} from "@/utils/types/layout";

const divOneClipPath = "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)";
const divTwoClipPath = "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)";

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