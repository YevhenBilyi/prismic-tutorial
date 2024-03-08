import { Content, isFilled } from "@prismicio/client";
import { JSXMapSerializer, SliceComponentProps, PrismicRichText} from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

import { createClient } from "@/prismicio";
import test from "node:test";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

const components: JSXMapSerializer = {
    heading2: ({children})=>(
        <Heading as="h2" size="md"
        className="text-center mb-9 font-semibold">
            {children}
        </Heading>
    ),
    paragraph: ({children})=>(
        <p className="text-l md:text-l font-normal font-body text-slate-600 mb-3">
            {children}
        </p>
    )
}

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = async ({ slice }: TestimonialsProps): Promise<JSX.Element> => {

  const client = createClient();

  const testimonials = await Promise.all(slice.items.map((item) =>
  {
    if( isFilled.contentRelationship(item.testimonial)&&item.testimonial.uid){
        return client.getByUID("testimonial", item.testimonial.uid)
    }
  }))

  
  
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText components={components} field={slice.primary.heading} />
      <div className={clsx("grid grid-cols-1 gap-6", slice.variation==="default"? "lg:grid-cols-3" : "lg:grid-cols-2")}>
        {testimonials.map((item,index)=>item&&(
            <div key={index}>
                <PrismicRichText field={item.data.heading} components={components} />
                <div  className=" border bg-white shadow-lg rounded-3xl px-4
                md:px-6 pt-5 grid content-between ">
                    <PrismicRichText field={item.data.quote} components={components} />
                </div>
            </div>

        ))}
      </div>

    </Bounded>
  );
};

export default Testimonials;
