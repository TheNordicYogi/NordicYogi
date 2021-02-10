import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getStaticProps } from "../pages/blog/[id]";

const name = "Curtis Knudson";
export const siteTitle = "NORDICYOGI";

export default function Layout({ props, children, home }) {
  return (
    <div className="max-w-xl py-0 px-4 mt-12 mx-auto mb-24">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex flex-col items-center">
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className="rounded-full   w-32 h-32"
              alt={name}
            />
            <h1 className="text-4xl tracking-tighter font-extrabold my-4 mx-0">
              {name}
            </h1>
          </>
        ) : (
          <span></span>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="mt-12 mx-0 mb-0">
          <Link href="/">
            <a className="text-blue-300">← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
