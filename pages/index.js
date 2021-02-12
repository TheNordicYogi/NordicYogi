import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import styles from "../styles/index.module.css";

// Components
import Layout, { siteTitle } from "../components/layout";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className="text-xl">
          <p>
            Hi, I'm Curtis and I have a passion for religion, wine and building
            websites with React.
          </p>
          <p></p>
        </section>
        <section className="py-4 text-xl">
          <h2 className="text-2xl my-4 mx-0  font-semibold">Blog</h2>
          <ul className="list-none py-4 px-0 m-0 md:flex-grow md:flex-">
            {allPostsData.map(
              ({
                id,
                date,
                title,
                header,
                subtitle,
                firstparagraph,
                readtime,
              }) => (
                <li className="my-4">
                  <Link href={`/blog/${id}`}>
                    <div className="flex flex-col rounded shadow-lg cursor-pointer w-full sm:w-10/12 mx-auto">
                      <div>
                        <img
                          src={header}
                          alt=""
                          height={250}
                          width={250}
                          className="w-full"
                        />
                      </div>
                      <div className="ml-2 mr-8">
                        <span className="text-blue-500 text-xs my-2  font-extrabold">
                          Blog
                        </span>
                        <h1 className="tracking-tighter text-md  font-extrabold my-1">
                          {title}:
                          <span className="text-gray-400 px-1">{subtitle}</span>
                          <p className="text-sm font-light tracking-tight my-2 text-gray-600">
                            {firstparagraph}...
                          </p>
                        </h1>
                        <div className="my-8  flex text-sm items-center">
                          <img
                            className="rounded-full"
                            src="/images/profile.jpg"
                            alt="Curtis Knudson portrait"
                            height={64}
                            width={64}
                          />
                          <div className="flex flex-col  mx-2">
                            <span className="my-1 text-green-600">
                              Curtis Knudson
                            </span>
                            <span className="text-gray-400">
                              <Date dateString={date} /> - {readtime} minute
                              read
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              )
            )}
          </ul>
        </section>
      </Layout>
    </>
  );
}

{
  /* <li
  className="mt-0 mx-0 mb-0.5 text-blue-500 hover:text-blue-700
                hover:bg-gray-50
                rounded"
  key={id}
>
  <Link href={`/blog/${id}`}>
    <a>
      {title}
      <br />
      <small className="text-gray-400">
        <Date dateString={date} />
      </small>
    </a>
  </Link>
</li>; */
}
