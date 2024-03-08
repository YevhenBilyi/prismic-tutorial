import { Metadata } from "next";
import { createClient } from "@/prismicio";
import BirthcentersPage from "@/components/BirthcentersPage";

export default async function Page() {
    const client = createClient();
    const page = await client.getSingle("birth_centers");
  
  return <BirthcentersPage page={page} />;

}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("birth_centers");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
