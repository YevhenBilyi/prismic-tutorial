import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";

const components: JSXMapSerializer = {
    heading3: ({children})=>(
        <h3 className="text-3xl font-bold text-slate-900">{children}</h3>
        ),
    paragraph: ({children})=>(
        <p className="text-lg font-body text-slate-600 my-4">{children}</p>
        ),
    hyperlink: ({children, node, })=>{
        return (<a
        href={node.data.url}
        className="text-lg font-body text-blue-600 hover:text-blue-800 visited:text-purple-600 my-4"
        rel="noopener noreferrer"
        >
            {children}
        </a>)
    }
}

/**
 * Props for `Table`.
 */
export type TableProps = SliceComponentProps<Content.TableSlice>;

/**
 * Component for "Table" Slices.
 */
const Table = ({ slice }: TableProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
        <div className="overflow-x-auto">
  asdfafsdf
  
        {/* <table className={"min-w-full border-collapse"}>
        <thead>
            <tr>
                <td className="border p-4 text-left bg-orange-200 font-medium"><PrismicRichText field={slice.primary.title1} components={components}/></td>
                <td className="border p-4 text-left bg-orange-200 font-medium"><PrismicRichText field={slice.primary.title2} components={components}/></td>
                <td className="border p-4 text-left bg-orange-200 font-medium"><PrismicRichText field={slice.primary.title3} components={components}/></td>
                <td className="border p-4 text-left bg-orange-200 font-medium"><PrismicRichText field={slice.primary.title4} components={components}/></td>

            </tr>
        </thead>
        <tbody>
            {slice.items.map((item, index) => (
                <tr key={index} className="bg-white">
                    <td className="border p-4 text-left">{item.column1 ?<PrismicRichText field={item.column1} components={components}/>:null}</td>
                    <td className="border p-4 text-left">{item.column1 ?<PrismicRichText field={item.column2} components={components}/>:null}</td>
                    <td className="border p-4 text-left">{item.column1 ?<PrismicRichText field={item.column3} components={components}/>:null}</td>
                    <td className="border p-4 text-left">{item.column1 ?<PrismicRichText field={item.column4} components={components}/>:null}</td>
                </tr>
            ))}
        </tbody>

        </table> */}
              </div>
    </Bounded>
  );
};

export default Table;
