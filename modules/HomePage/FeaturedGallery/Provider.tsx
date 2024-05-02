"use client";

import Link from "next/link";
import styles from "@/modules/HomePage/FeaturedGallery/styles.module";
import {ReactChildren} from "@/utils/types/layout";
import {ReactNode, useState} from "react";
import {useRouter} from "next/navigation";

interface ImageCardProviderProps {
  children: ReactChildren;
  imgSrc: any;
  overlayElement: ReactNode;
}

const ImageCardProvider = ({children, ...props}: ImageCardProviderProps) => {
  const [overlay, setOverlay] = useState(false);
  const router = useRouter();

  return (
    <Link
      className={styles.control}
      href={props.imgSrc}
      onMouseOver={() => setOverlay(true)}
      onMouseLeave={() => setOverlay(false)}
      onClick={(event) => {
        event.preventDefault();
        router.push(event.currentTarget.href);
      }}
    >
      {overlay && props.overlayElement}
      {children}
    </Link>
  )
};

export default ImageCardProvider;