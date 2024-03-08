import { Metadata } from "next";

import { createClient } from "@/prismicio";
import DecisionGuide from "@/components/DecisionguidePage";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("decision_guide");

  return <DecisionGuide page={page} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("decision_guide");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
