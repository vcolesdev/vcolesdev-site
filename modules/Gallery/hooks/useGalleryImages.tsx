import ImageCard from "@/modules/ImageCard";

/**
 * useGalleryImages()
 * @param images
 */
export function useGalleryImages({ images }: { images: string[] }) {
  return images.map((image, index) => (
    <ImageCard key={image} id={`featured-image-${index}`} imgSrc={`/images/featured/${image}`} />
  ));
}
