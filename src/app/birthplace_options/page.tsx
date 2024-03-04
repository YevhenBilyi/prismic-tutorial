"use client"

import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Button from "@/components/Button";
import useStore from "../../../store/store";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [page, setPage] = useState(null);
  const setInitialPage = useStore(state => state.setInitialPage);
  useEffect(()=>
  {
    async function fetchData(){
        let client = createClient();
        let pageFetched = await client.getSingle("birthplace_options");
        setPage(pageFetched);
    }
    fetchData();
  },[])
  if(page){
    return (
      <div>
        <SliceZone slices={page.data.slices} components={components} />
        <div className={"flex items-center justify-center space-x-4 pb-10"}>
            <Button onClick={()=>setInitialPage("birthCenters")}>
                <Link href="/birthCenters">
                    Fæðingarheimili
                </Link>
            </Button>
            <Button onClick={()=>setInitialPage("homeBirths")}>
                <Link href="/homeBirths">
                    Heimafæðing
                </Link>
            </Button>
            <Button onClick={()=>setInitialPage("hospitalBirths")}>
                <Link href="/hospitalBirths">
                    Sjúkrahús/Heilbrigðisstofnanir
                </Link>
            </Button>
        </div>
      </div>
    );
  }
return null;
}
//   return ({page? (<div>
//     <SliceZone slices={page.data.slices} components={components} />;
//     <div className={"flex items-center justify-center space-x-4 pb-10"}>
//         <Button onClick={()=>setInitialPage("birthCenters")}>
//             <Link href="/birthCenters">
//                 Heimafæðing
//             </Link>
//         </Button>
//         <Button onClick={()=>setInitialPage("homeBirths")}>
//             <Link href="/birthCenters">
//                 Fæðingarheimili
//             </Link>
//         </Button>
//         <Button onClick={()=>setInitialPage("hospitalBirths")}>
//             <Link href="/birthCenters">
//                 Sjúkrahús/Heilbrigðisstofnanir
//             </Link>
//         </Button>
//     </div>
//     </div>) : null}
//     );
  

// export async function generateMetadata(): Promise<Metadata> {
//   const client = createClient();
//   const page = await client.getSingle("birthplace_options");

//   return {
//     title: page.data.meta_title,
//     description: page.data.meta_description,
//   };
// }
