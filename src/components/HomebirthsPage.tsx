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
          router.push('/sjukrahusafaedingar')
        }
        else {
            router.push('/faedingarstodvar')
        }
      };
    return (
            <div>
                <SliceZone slices={page.data.slices} components={components} />
                <div className={"flex items-center justify-center space-x-4 p-10"}>
                <a
                href={"https://www.ljosmaedrafelag.is/thjonusta/heimafaedingar"}
                target='_blank'
                rel="noopener noreferrer"
                > 
                    <Button>
                        Finna heimafæðingarljósmóður
                    </Button>
                </a>
                   
                        <Button onClick={goToNextPage}>
                        Halda áfram
                        </Button>
                </div>
            </div>)
}