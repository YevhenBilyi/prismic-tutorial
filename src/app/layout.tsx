import type { Metadata } from "next";
import { Nunito, Nunito_Sans, Alkatra, Cinzel, Libre_Franklin} from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { createClient, repositoryName } from "@/prismicio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PrismicPreview } from "@prismicio/next";

const cinzel = Cinzel({
    subsets: ['latin'],
    variable: '--font-cinzel',
    display: 'swap',
})

const libreFranklin = Libre_Franklin({
    subsets: ['latin'],
    variable: '--font-libre-franklin',
    display: 'swap',
})

export async function generateMetadata( ): Promise<Metadata> {
    const client = createClient();

    const settings = await client.getSingle("settings");
   
    return {
      title: settings.data.site_title || "Fallback example",
      description: settings.data.meta_description || "Fallback example",
      openGraph: {
        images: [settings.data.og_image.url || ""],
      },
    }
  }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(cinzel.variable, libreFranklin.variable)}>
        <body >
            <Header/>
            {children}
            <Footer/>
            <div className="fixed bg-gradient-to-tr from-orange-50 to-amber-50 z-[-1] 
            inset-0 opacity-50"/>
            <PrismicPreview repositoryName={repositoryName} />
        </body>
    </html>
  );
}
