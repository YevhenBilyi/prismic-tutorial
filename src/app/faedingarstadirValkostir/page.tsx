import { Metadata } from "next";
import { createClient } from "@/prismicio";
import BirthplaceoptionsPage from "@/components/BirthplaceoptionsPage";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("birthplace_options");

  return <BirthplaceoptionsPage page={page} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("birthplace_options");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
