'use client'

import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Button from "@/components/Button";
import useStore from "../../store/store";
import Link from "next/link";

export default function Page({page}:{page: any}){

  const setInitialPage = useStore(state => state.setInitialPage);

    return (
      <div>
        <SliceZone slices={page.data.slices} components={components} />
        <div className={"flex flex-col space-y-4 p-10 md:flex-row md:space-x-4 md:space-y-0 items-center justify-center"}>
            <Link href="/birthCenters">
                <Button onClick={()=>setInitialPage("birthCenters")}>
                    Fæðingarheimili
                </Button>
             </Link>
            <Link href="/homeBirths">
                <Button onClick={()=>setInitialPage("homeBirths")}>
                    Heimafæðing
                </Button>
            </Link>
            <Link href="/hospitalBirths">
                <Button onClick={()=>setInitialPage("hospitalBirths")}>
                    Sjúkrahús/Heilbrigðisstofnanir
                </Button>
            </Link>
        </div>
      </div>
    );
}
