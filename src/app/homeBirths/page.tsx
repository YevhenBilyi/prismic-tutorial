import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import HomebirthsPage from "@/components/HomebirthsPage";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("home_births");

  return <HomebirthsPage page={page} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("home_births");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}