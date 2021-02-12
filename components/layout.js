import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const name = "Curtis Knudson";
const zapierHook = "https://hooks.zapier.com/hooks/catch/9225569/ophct6n/";

export const siteTitle = "Nordic Yogi";

export default function Layout({ children, home }) {
  const [darkMode, setDarkMode] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [person, setPerson] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (person.email) {
      setPerson({ email: "" });
      fetch(zapierHook, {
        method: "POST",
        body: JSON.stringify({ person }),
      })
        .then(() => setFormSubmitted(true))
        .catch((err) => {
          alert(
            "There was an error, please contact me at curtisknudson@gmail.com"
          );
        });
    } else {
      alert("Your information is required to submit!");
    }
  };

  return (
    <div className="max-w-xl py-0 mt-12 mx-auto mb-24 px-4 md:px-0">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo512.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#000000" />
        <meta name="theme-color" content="#000000" />
        {home ? (
          <>
            <link rel="icon" href="/favicon.ico" />
            <meta
              property="description"
              content="Nordic Yogi: Lifestyle, Religion, Code"
            />
            <meta
              name="description"
              content="Nordic Yogi: Lifestyle, Religion, Code"
            />
            <meta
              property="og:description"
              content="Nordic Yogi: Lifestyle, Religion, Code"
            />
            <meta
              property="og:image"
              content="https://nordicyogi.com/images/og-image.jpg"
            />
            <meta property="og:url" content="https://nordicyogi.com" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={siteTitle} />
            <meta
              property="twitter:card"
              content="https://nordicyogi.com/images/og-image.jpg"
            />
          </>
        ) : (
          <meta />
        )}
      </Head>
      <header className="flex flex-col items-center">
        {home ? (
          <>
            <Image
              src="/images/profile.jpg"
              className=" rounded-full  w-32 h-32"
              alt={name}
              width="128"
              height="128"
            />
            <h1 className="text-4xl tracking-tighter font-extrabold my-4 mx-0 dark:text-white87">
              {name}
            </h1>
          </>
        ) : (
          <span></span>
        )}
      </header>
      <main className="">{children}</main>
      {!home && (
        <div>
          {formSubmitted ? (
            <div className="flex flex-col items-center text-lg justify-around mt-8">
              <h4 className="text-4xl font-extrabold tracking-tighter dark:text-white87 ">
                Thank you for subscribing!
              </h4>
            </div>
          ) : (
            <div className="flex flex-col items-center text-lg justify-around mt-8">
              <h4 className="text-4xl font-extrabold tracking-tighter dark: text-white87">
                Stay in touch!
              </h4>
              <p className="pt-1 text-center dark:text-white87">
                Get our top stories straight to your inbox
              </p>
              <form
                className="w-full mt-4 flex flex-col items-center  rounded dark:bg-mgray dark:text-white87"
                action=""
              >
                <label htmlFor="email"></label>
                <input
                  className=" w-full h-8 text-gray-400 outline-none text-center rounded my-2  dark:bg-transparent dark:text-white87
            "
                  type="email"
                  name="email"
                  id="email"
                  placeholder="EMAIL ADDRESS"
                  value={person.email}
                  onChange={handleChange}
                />
                <button
                  className="text-center font-semibold mt-2 h-12 rounded w-24  hover:bg-gray-200 dark:bg-transparent dark:text-white87 dark:hover:bg-gray-600"
                  type="submit "
                  onClick={handleClick}
                >
                  Subscribe
                </button>
              </form>
            </div>
          )}
          <div className="mt-12 mx-0 mb-0">
            <Link href="/">
              <a className="text-blue-300 hover:text-blue-500 ">
                ← Back to home
              </a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
