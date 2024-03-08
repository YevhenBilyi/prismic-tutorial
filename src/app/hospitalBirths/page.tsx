import { Metadata } from "next";

import { createClient } from "@/prismicio";
import HospitalbirthsPage from "@/components/HospitalbirthsPage";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("hospital_births");

  return <HospitalbirthsPage page={page} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("hospital_births");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
