import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "./Bounded";
import HamburgerMenu from "./HamburgerMenu";

export default async function Home() {

    const client = createClient();

    const settings = await client.getSingle("settings");

    return <Bounded as="header" className="py-4 px-5 md:py-6 lg-py-8"> 
            <div className="flex flex-wrap gap-4 items-center justify-between md:flex-nowrap">
                <Link href={"/"}>
                    <p className=" font-body text-slate-900">Forsíða</p>
                </Link>
                <HamburgerMenu settings={settings} />
            </div>
     </Bounded>


}