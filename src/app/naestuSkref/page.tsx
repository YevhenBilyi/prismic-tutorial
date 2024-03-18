import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Link from "next/link";
import Button from "@/components/Button";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("next_steps");

  return <div>
            <SliceZone slices={page.data.slices} components={components} />;
            <Link href="/"className={"flex items-center justify-center space-x-4 p-10"}>
            <Button>Forsíða</Button>
            </Link>
        </div>
  
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("next_steps");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
