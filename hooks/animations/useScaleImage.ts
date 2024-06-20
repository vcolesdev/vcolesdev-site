export default function useScaleImage({
  animate,
  duration,
  images,
  scale,
}: {
  animate: any; // @TODO - Fix this type
  duration?: number;
  images: NodeListOf<HTMLImageElement>;
  scale?: number;
}) {
  Array.from(images).forEach((image, i) => {
    animate(image, {scale: scale || 1}, {duration: duration || 0.5});
  });
}
