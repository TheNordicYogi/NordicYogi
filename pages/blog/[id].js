import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <>
      <div>
        <img
          loading="eager"
          className="rounded w-full md:max-w-xl md:mx-auto"
          src={postData.header}
          alt={postData.alt}
        />
        <Layout>
          <Head>
            <title>
              {postData.title}: {postData.subtitle}
            </title>
            <meta property="og:image" content={postData.header} />
          </Head>

          <article>
            <h1 className="text-4xl tracking-tighter my-4 mx-0 font-extrabold">
              {postData.title}:
              <span className="text-gray-400"> {postData.subtitle}</span>
            </h1>

            <div className="text-gray-400 flex flex-col smxxl:flex-row">
              <img
                src="/images/profile.jpg"
                className="rounded-full w-6 h-6"
                alt=""
              />
              <Link href="/">
                <a>
                  <span className="smxxl:pl-2 smxxl:pr-1">
                    {" "}
                    Curtis Knudson -{" "}
                  </span>
                </a>
              </Link>

              <Date dateString={postData.date} />
            </div>

            <div
              className="mt-4 blog"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
          </article>
        </Layout>
      </div>
    </>
  );
}
