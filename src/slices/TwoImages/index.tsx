import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
        <PrismicNextImage field={slice.primary.imageleft}
        className={"rounded-lg md:col-span-1 shadow-2xl"} />
        <p className="font-body text-slate-900 mt-5 text-center">{slice.primary.subtitle_image_left}</p>
            </div>
            <div>
        <PrismicNextImage field={slice.primary.imageright}
        className={"rounded-lg md:col-span-1 shadow-2xl"} />
        <p className="font-body text-slate-900 mt-5 text-center">{slice.primary.subtitle_image_right}</p>
            </div>

        </div>
    </Bounded>
  );
};

export default TwoImages;
