export interface ImageCard {
  id: string;
  imgSrc: string;
  height?: number;
  width?: number;
}

export interface ImageCardStyles {
  overlay: {
    styles: string;
    span: string;
  };
  control: string;
  imageMedia: string;
}
