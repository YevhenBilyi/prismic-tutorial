'use client'

import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import useStore from "../../store/store";
import { useRouter } from 'next/navigation'
import Button from "@/components/Button";



export default function Home({page}:{page: any}) {

  
    const initialPage = useStore(state => state.initialPage);
    const router = useRouter()
  
    const goToNextPage = () => {
        if (initialPage === "birthCenters") {
          router.push('/hospitalBirths')
        }
        else {
            router.push('/birthCenters')
        }
      };
    return (
            <div>
                <SliceZone slices={page.data.slices} components={components} />
                <div className={"flex items-center justify-center space-x-4 p-10"}>
                        <Button onClick={goToNextPage}>
                        Halda áfram
                        </Button>
                </div>
            </div>)
}