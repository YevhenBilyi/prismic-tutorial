import { Content } from "@prismicio/client";
import { SliceComponentProps, JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import Bounded from "@/components/Bounded";

const components: JSXMapSerializer = {
    heading4: ({children})=>(
        <h4 className="text-3xl font-bold text-slate-900">{children}</h4>
        ),
    paragraph: ({children})=>(
        <p className="text-lg font-body text-slate-600 my-4">{children}</p>
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
 * Props for `Text`.
 */
export type TextProps = SliceComponentProps<Content.TextSlice>;

/**
 * Component for "Text" Slices.
 */
const Text = ({ slice }: TextProps): JSX.Element => {
  return (
    <Bounded className="mt-5 text-center"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.text} components={components}/>
    </Bounded>
  );
};

export default Text;
