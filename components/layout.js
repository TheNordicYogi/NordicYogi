import Head from "next/head";
import Link from "next/link";

const name = "Curtis Knudson";
export const siteTitle = "Nordic Yogi";

export default function Layout({ props, children, home }) {
  return (
    <div className="max-w-xl py-0 mt-12 mx-auto mb-24 px-4 md:px-0">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Nordic Yogi: Lifestyle, Religion, Code"
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

      <main className="">{children}</main>
      {!home && (
        <div className="flex flex-col text-lg">
          <h4 className="text-4xl font-extrabold tracking-tighter mt-8">
            Stay in touch!
          </h4>
          <p className="pt-1">Get our top stories straight to your inbox</p>
          <form className="w-full mt-1" action="">
            <label htmlFor="email"></label>
            <input
              className=" w-full h-8 text-gray-400 outline-none
            "
              type="email"
              name="email"
              id="email"
              placeholder="EMAIL ADDRESS"
            />
          </form>
        </div>
      )}
      {!home && (
        <div className="mt-12 mx-0 mb-0">
          <Link href="/">
            <a className="text-blue-300 hover:text-blue-500 ">← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
