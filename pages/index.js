import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";

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
          <ul className="list-none py-4 px-0 m-0">
            {allPostsData.map(({ id, date, title }) => (
              <li
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
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  );
}
