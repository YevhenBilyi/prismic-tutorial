import { createClient } from "@/prismicio";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";
import Logo from "./Logo";
import Bounded from "./Bounded";

export default async function Footer() {
    const client = createClient();
    const settings = await client.getSingle("settings");
    return <Bounded as="footer">
            <div className="flex sm:flex-row flex-col justify-between items-center gap-6">
                <Link href={"/"}>
                    <Logo/>
                </Link>
                <p className="text-xs">
                    ©{new Date().getFullYear()} {settings.data.site_title}
                    </p>
                <ul className="flex">
                    {settings.data.navigation.map(({label,link}) => (
                        <li key={label}>
                            <PrismicNextLink field={link}
                            className="p-3">
                                {label}
                            </PrismicNextLink>
                        </li>
                    ))}
                </ul>
            </div>
    </Bounded>;

}