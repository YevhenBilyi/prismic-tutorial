import { Content } from "@prismicio/client";
import { SliceComponentProps,JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

const components: JSXMapSerializer = {
    paragraph: ({children})=>(
        <p className="text-lg font-body text-slate-600 border-2 rounded-3xl p-5 ">{children}</p>
        )  

}

/**
 * Props for `TextWithBorder`.
 */
export type TextWithBorderProps =
  SliceComponentProps<Content.TextWithBorderSlice>;

/**
 * Component for "TextWithBorder" Slices.
 */
const TextWithBorder = ({ slice }: TextWithBorderProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
            <PrismicRichText field={slice.primary.textwihborder} components={components}/>

      
    </Bounded>
  );
};

export default TextWithBorder;
