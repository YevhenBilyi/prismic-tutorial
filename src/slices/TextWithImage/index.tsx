import { Content } from "@prismicio/client";
import { SliceComponentProps, JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

const components: JSXMapSerializer = {
    heading2: ({children})=>(
        <Heading as="h2" size="lg" 
        className="">
            {children}
        </Heading>
        ),
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
 * Props for `TextWithImage`.
 */
export type TextWithImageProps =
  SliceComponentProps<Content.TextWithImageSlice>;

/**
 * Component for "TextWithImage" Slices.
 */
const TextWithImage = ({ slice }: TextWithImageProps): JSX.Element => {
  return (
    <Bounded 
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
    <div className="grid md:grid-cols-5 place-items-center gap-8">
        <PrismicNextImage field={slice.primary.image}
        className={clsx("rounded-lg md:col-span-2",
        slice.variation==="imageRight"&&"md:order-2")} />
        <div className="md:col-span-3 grid gap-4">
            <PrismicRichText field={slice.primary.heading} components={components}/>
            <div className="border-2 rounded-3xl p-5">
              <PrismicRichText field={slice.primary.body} components={components}/>  
            </div>
            
        </div>
    </div>

      

      
      
    </Bounded>
  );
};

export default TextWithImage;
