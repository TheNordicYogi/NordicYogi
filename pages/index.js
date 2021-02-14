import React, { useState } from "react";
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
        <section className="text-xl dark:text-white87 transition duration-500 ease-in-out mx-auto max-w-xl">
          <p>
            Hi, I'm Curtis and I have a passion for religion, wine and building
            websites with React.
          </p>
          <p></p>
        </section>
        <section className="py-4 text-xl">
          <h2 className="text-2xl my-4 mx-auto font-semibold dark:text-white87 max-w-xl">
            Blog
          </h2>

          <ul className="list-none my-4 py-4 px-0 m-0 max-w-xl mx-auto ">
            {allPostsData.map(
              ({
                id,
                date,
                title,
                header,
                subtitle,
                firstparagraph,
                readtime,
                type,
                authorImg,
                authorName,
              }) => (
                <li className="my-4" key={id}>
                  <Link href={`/blog/${id}`}>
                    <div className="flex flex-col rounded shadow-lg cursor-pointer w-full mx-auto dark:bg-mgray">
                      <div>
                        <img
                          src={header}
                          alt=""
                          height={250}
                          width={250}
                          className="w-full"
                        />
                      </div>
                      <div className="ml-2 mr-8 dark:text-white87">
                        <span className="text-blue-500 text-xs my-2  font-extrabold ">
                          {type}
                        </span>
                        <h1 className="tracking-tighter text-md  font-extrabold my-1">
                          {title}:
                          <span className="text-gray-400 px-1">{subtitle}</span>
                          <p className="text-sm font-light tracking-tight my-2 text-gray-600">
                            {firstparagraph}...
                          </p>
                        </h1>
                        <div className="my-4  flex text-sm items-center">
                          <img
                            className="rounded-full"
                            src={authorImg}
                            alt={authorName}
                            height={64}
                            width={64}
                          />
                          <div className="flex flex-col  mx-4">
                            <span className="my-1 text-green-600">
                              {authorName}
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
