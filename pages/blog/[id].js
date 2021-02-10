import Head from "next/head";
import Image from "next/image";
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
    <Layout>
      <Head>
        <title>
          {postData.title}: {postData.subtitle}
        </title>
      </Head>
      <div className="max-w-xl h-auto">
        <img
          loading="eager"
          className="rounded"
          src={postData.image}
          alt={postData.alt}
        />
      </div>
      <article>
        <h1 className="text-4xl tracking-tighter my-4 mx-0 font-extrabold">
          {postData.title}:
          <span className="text-gray-400"> {postData.subtitle}</span>
        </h1>

        <div className="text-gray-400">
          <Date dateString={postData.date} />
        </div>
        <div
          className="mt-4"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Layout>
  );
}
