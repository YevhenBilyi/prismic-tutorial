'use client'

import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import useStore from "../../../store/store";
import { useRouter } from 'next/navigation'
import Button from "@/components/Button";
import { useEffect, useState } from "react";

export default function Page() {
    const [page, setPage] = useState(null);
  useEffect(()=>
  {
      async function fetchData(){
              let client = createClient();
              let pageFetched = await client.getSingle("hospital_births");
              setPage(pageFetched);
      }
      fetchData();
  },[])

  const initialPage = useStore(state => state.initialPage);
  const router = useRouter()

  const goToNextPage = () => {
    if (initialPage === "hospitalBirths") {
        router.push('/homeBirths')
    }
    else {
        router.push('/decisionGuide')
    }
  };
    if(page){
        return (
<div>
        <SliceZone slices={page.data.slices} components={components} />
        <div className={"flex items-center justify-center space-x-4 p-10"}>
                <Button onClick={goToNextPage}>
                        Next
                </Button>
        </div>
  </div>)
    }
  return null;

}

// export async function generateMetadata(): Promise<Metadata> {
//   const client = createClient();
//   const page = await client.getSingle("hospital_births");

//   return {
//     title: page.data.meta_title,
//     description: page.data.meta_description,
//   };
// }
