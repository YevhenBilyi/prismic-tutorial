import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "./Bounded";
import Logo from "./Logo";

export default async function Home() {

    const client = createClient();

    const settings = await client.getSingle("settings");

    return <Bounded as="header" className="py-4 md:py-6 lg-py-8"> 
            <div className="flex gap-4 items-center justify-between sm:flex-row flex-col">
                <Link href={"/"}>
                <div style={{ width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Logo />
        </div>
                    </Link>
                <nav>
                    <ul className="flex">
                        {settings.data.navigation.map(({label,link}) => (
                            <li key={label}>
                                <PrismicNextLink field={link}
                                className="p-3">{label}</PrismicNextLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
     </Bounded>


}