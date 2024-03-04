import { createClient } from "@/prismicio";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";
import Logo from "./Logo";
import Bounded from "./Bounded";

export default async function Footer() {
    const client = createClient();
    const settings = await client.getSingle("settings");
    return         <Bounded as="footer" className="bg-gray-100 text-gray-700 py-6">
                        <div className="container mx-auto flex sm:flex-row flex-col justify-between items-center gap-6 px-4 text-sm">
                            <p className="text-center sm:text-left">{settings.data.footer}</p>
                        </div>
                    </Bounded>

}