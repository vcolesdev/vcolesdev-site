import image_01 from "@/assets/images/photos/01.jpeg";
import image_02 from "@/assets/images/photos/02.jpeg";
import image_03 from "@/assets/images/photos/03.jpeg";
import image_04 from "@/assets/images/photos/04.jpeg";
import image_05 from "@/assets/images/photos/05.jpeg";
import image_06 from "@/assets/images/photos/06.jpeg";
import image_07 from "@/assets/images/photos/07.jpeg";
import image_08 from "@/assets/images/photos/08.jpeg";
import image_09 from "@/assets/images/photos/09.jpeg";
import image_10 from "@/assets/images/photos/10.jpeg";
import image_11 from "@/assets/images/photos/11.jpeg";
import image_12 from "@/assets/images/photos/12.jpeg";
import {StaticImageData} from "next/image";
import {useState} from "react";

interface Image {
  id: number;
  title: string;
  data: StaticImageData;
}

/**
 * useFeaturedImages hook
 * @description This hook is used to fetch all the featured images from our assets folder..
 */
function useFetchFeaturedImages() {
  const [images, setImages] = useState<StaticImageData[]>([]);

  let numOfImages = 12;

  const featuredImages = [
    image_01,
    image_02,
    image_03,
    image_04,
    image_05,
    image_06,
    image_07,
    image_08,
    image_09,
    image_10,
    image_11,
    image_12,
  ];

  return {featuredImages};
}

export default useFetchFeaturedImages;
