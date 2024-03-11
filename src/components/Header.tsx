import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "./Bounded";
import Logo from "./Logo";

export default async function Home() {

    const client = createClient();

    const settings = await client.getSingle("settings");

    return <Bounded as="header" className="py-4 md:py-6 lg-py-8"> 
            <div className="flex gap-4 items-center justify-between flex-row">
                <Link href={"/"}>
                    <h4 className="text-3xl font-bold font-body text-slate-900">Forsíða</h4>
                </Link>
                <nav>
                    <ul className="flex">
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