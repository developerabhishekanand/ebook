import {ImageWrapper,StyledImage} from "./style";
import Image from 'next/image';


type StyledNextImageProps = {
  src: string;
  alt?: string;
};

const StyledNextImage = ({ src, alt = 'Image' }: StyledNextImageProps) => {
  return (
    <ImageWrapper className="image-wrapper">
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
    </ImageWrapper>
  );
};

export default StyledNextImage;