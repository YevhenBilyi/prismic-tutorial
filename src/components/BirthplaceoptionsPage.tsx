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
        <div className={"flex items-center justify-center space-x-4 p-10"}>
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
