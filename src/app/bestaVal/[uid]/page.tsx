import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Button from "@/components/Button";
import Link from "next/link";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("best_choice", params.uid)
    .catch(() => notFound());

  return <div>
            <SliceZone slices={page.data.slices} components={components} />;
            <Link href="/naestuSkref" className={"flex items-center justify-center space-x-4 p-10"}>
                <Button>
                    Halda áfram
                </Button>
            </Link>
        </div>

}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("best_choice", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("best_choice");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
