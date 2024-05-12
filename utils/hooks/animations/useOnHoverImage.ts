import useScaleImage from "@/utils/hooks/animations/useScaleImage";
import {AnimationScope} from "framer-motion";
import {useEffect, useState} from "react";

export default function useOnHoverImage(
  animate: any, // @TODO - Fix this type
  duration: number,
  scale: number,
  scope: AnimationScope<any>
) {
  const [images, setImages] = useState<NodeListOf<HTMLImageElement> | null>(
    null
  );
  const [imageScale, setImageScale] = useState<number>(1);
  const [animationDuration, setAnimationDuration] = useState<number>(0.5);

  useEffect(() => {
    setImages(scope.current.querySelectorAll("img"));
    setAnimationDuration(duration);
    setImageScale(scale);
  }, [animationDuration, scale, scope]);

  return () => {
    if (!images) {
      console.log("No images found.");
      return;
    }
    useScaleImage({
      animate,
      duration,
      images,
      scale,
    });
  };
}
