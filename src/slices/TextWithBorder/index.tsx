import { Content } from "@prismicio/client";
import { SliceComponentProps,JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

const components: JSXMapSerializer = {
    paragraph: ({children})=>(
        <p className="text-lg font-body text-slate-600 my-2">{children}</p>
        ),
    hyperlink: ({children, node, })=>{
        return (<a
        href={node.data.url}
        className="text-lg font-body text-blue-600 hover:text-blue-800 visited:text-purple-600 my-4"
        target='_blank'
        rel="noopener noreferrer"
        >
            {children}
        </a>)
    }

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
        <div className={"border-2 rounded-3xl p-5 bg-white shadow-lg"}>
            <PrismicRichText field={slice.primary.textwihborder} components={components}/>
        </div>

      
    </Bounded>
  );
};

export default TextWithBorder;
