import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "./Bounded";
import Logo from "./Logo";

export default async function Home() {

    const client = createClient();

    const settings = await client.getSingle("settings");

    return <Bounded as="header" className="py-4 md:py-6 lg-py-8"> 
            <div className="flex flex-wrap gap-4 items-center justify-between md:flex-nowrap">
                <Link href={"/"}>
                    <p className=" font-body text-slate-900">Forsíða</p>
                </Link>
                <nav>
                    <ul className="flex space-x-2 md:space-x-0 flex-wrap md:flex-nowrap">
                        {settings.data.navigation.map(({label,link}) => (
                            <li key={label}>
                                <PrismicNextLink field={link}
                                className="p-3 font-body text-slate-900">{label}</PrismicNextLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
     </Bounded>


}