import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { createClient, repositoryName } from "@/prismicio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PrismicPreview } from "@prismicio/next";

const nunito = Nunito({
    subsets: ['latin'],
    variable: '--font-nunito',
    display: 'swap',
})

const nunitoSans = Nunito({
    subsets: ['latin'],
    variable: '--font-nunito-sans',
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
    <html lang="en" className={clsx(nunito.variable, nunitoSans.variable)}>
        <body >
            <Header/>
            {children}
            <Footer/>
            <div className="fixed bg-gradient-to-tr from-emerald-50 to-cyan-50 z-[-1] 
            inset-0 opacity-50"/>
            <PrismicPreview repositoryName={repositoryName} />
        </body>
    </html>
  );
}
