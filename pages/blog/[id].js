import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import { useRouter } from "next/router";

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
  const router = useRouter();
  return (
    <>
      <div className="max-w-xl mx-auto">
        <Image
          className="rounded w-full md:max-w-xl md:mx-auto"
          src={postData.header}
          alt={postData.alt}
          width={1600}
          height={900}
          priority={true}
          layout="responsive"
        />
        <Layout>
          <Head>
            <title>
              {postData.title}: {postData.subtitle}
            </title>
            <meta name="description" content={postData.description} />
            <meta
              property="og:image"
              content={"http://nordicyogi.com" + postData.header}
            />
            <meta property="og:description" content={postData.description} />
            <meta
              propert="og:url"
              content={"https://nordicyogi.com" + router.asPath}
            />
            <meta property="og:type" content="article" />
            <meta
              property="twitter:card"
              content={"https://nordicyogi.com" + postData.header}
            />
          </Head>

          <article>
            <h1 className="text-4xl tracking-tighter my-4 mx-0 font-extrabold">
              {postData.title}:
              <span className="text-gray-400"> {postData.subtitle}</span>
            </h1>

            <div className="text-gray-400 flex  items-center">
              <Link href="/">
                <a className=" w-full flex items-center ">
                  <Image
                    className="min-w-26"
                    src="/images/profile.jpg"
                    alt=""
                    width={64}
                    height={64}
                    priority={true}
                  />
                  <div
                    className="flex flex-col w-full  px-4 smxxl:flex-row
                  smxxl:px-0"
                  >
                    <span className="smxxl:mx-2  text-blue-400  underline">
                      Curtis Knudson
                    </span>

                    <Date dateString={postData.date} />
                  </div>
                </a>
              </Link>
            </div>
            <hr className="mt-4 shadow-2xl" />
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
