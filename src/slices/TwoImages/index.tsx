import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `TwoImages`.
 */
export type TwoImagesProps = SliceComponentProps<Content.TwoImagesSlice>;

/**
 * Component for "TwoImages" Slices.
 */
const TwoImages = ({ slice }: TwoImagesProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
          <div className="flex justify-center items-center">
        <PrismicNextImage field={slice.primary.imageleft}
        className={"rounded-lg "} />
        {/* <PrismicNextImage field={slice.primary.imageright}
        className={"rounded-lg md:col-span-2"} /> */}
        </div>
    </Bounded>
  );
};

export default TwoImages;
