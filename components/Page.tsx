import Head from "next/head";
import { PropsWithChildren } from "react";
import { Poppins } from 'next/font/google';

interface PageProps {
  title: string;
  description?: string;
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600']
});

export default function Page({ title, description, children }: PropsWithChildren<PageProps>) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`main ${poppins.className}`}>
        {children}
      </main>
    </>
  )
}
