import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Button from "@/components/Button";
import Link from "next/link";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return <div className={"flex flex-col items-center"}>
            <SliceZone slices={page.data.slices} components={components} />
            <Link href="/faedingarstadirValkostir"className={"flex items-center justify-center space-x-4 p-10"}>
                <Button>Halda áfram</Button>
            </Link>
        </div>
  
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
