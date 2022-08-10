import React, { useState } from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
const readingTime = require("reading-time");
import { RichText } from "@graphcms/rich-text-react-renderer";

const PostDetail = ({ post }) => {
  const [copied, setCopied] = useState(false);
  function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div>
      {/* header Post */}
      <div>
        <h1 className="text-xl flex sm:text-2xl lg:text-4xl font-bold ">
          {post.title}{" "}
          <button
            onClick={() => copy()}
            className="font-semibold ml-2 items-center text-gray-400 hidden md:inline-flex"
          >
            {copied ? (
              <span className="text-sm cursor-default">Copied!</span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 hover:text-gray-500 cursor-pointer"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </h1>
        <div className="my-5 sm:flex items-center space-y-5 sm:space-y-0">
          {/* avatar, date and readtime */}
          <div className="flex items-center space-x-2">
            <Image
              src={post.author.picture.url}
              alt={post.author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="text-sm md:text-base">{post.author.name}</p>
              <div className="flex items-center space-x-1">
                <time
                  className="text-gray-500 text-xs md:text-sm"
                  dateTime={moment(post.createdAt).format("DD MMM, YYYY")}
                >
                  {moment(post.createdAt).format("DD MMM, YYYY")}
                </time>
                <span className="px-1">·</span>
                <p className="text-gray-500 text-xs md:text-sm">
                  {readingTime(post.content.text).text}
                </p>
              </div>
            </div>
          </div>
          {/* social media */}
          <div className="flex-1 flex sm:justify-end items-center space-x-2 m-0 p-0 flex-wrap">
            <Link href="/">
              <a className="text-gray-400 hover:text-gray-500 px-4 py-1 bg-gray-300 rounded-md">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </Link>
            <Link href="/">
              <a className="ml-6 text-gray-400 hover:text-gray-500 px-4 py-1 bg-gray-300 rounded-md">
                <span className="sr-only">Linkedin</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </a>
            </Link>
            <Link href="/">
              <a className="ml-6 text-gray-400 hover:text-gray-500 px-4 py-1 bg-gray-300 rounded-md">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </Link>
            <button
              onClick={() => copy()}
              className="ml-6 text-gray-400 hover:text-gray-500 md:hidden px-4 py-1 bg-gray-300 rounded-md"
            >
              {copied ? (
                <span className="text-sm">Copied!</span>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* coverImage Post */}
      <div className="h-72 w-full relative mb-8">
        <Image
          src={post.coverImage.url}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          priority={true}
          className="rounded-md"
        />
      </div>
      {/* text Post */}
      <div className="mb-24">
        <RichText
          content={post.content.raw.children}
          renderers={{
            code_block: ({ children }) => {
              return (
                <pre className="my-5 border p-2 rounded-md">
                  <code>{children}</code>
                </pre>
              );
            },
            blockquote: ({ children }) => (
              <blockquote
                style={{
                  paddingLeft: "16px",
                  borderLeft: "4px solid lightgray",
                  marginBottom: "5px",
                }}
              >
                {children}
              </blockquote>
            ),
            p: ({ children }) => <p className="mb-8">{children}</p>,
            bold: ({ children }) => <strong>{children}</strong>,
            a: ({ children, openInNewTab, href, rel, ...rest }) => {
              if (href.match(/^https?:\/\/|^\/\//i)) {
                return (
                  // eslint-disable-next-line react/jsx-no-target-blank
                  <a
                    className="underline text-blue-800"
                    href={href}
                    target={openInNewTab ? "_blank" : "_self"}
                    rel={rel || "noopener noreferrer"}
                    {...rest}
                  >
                    {children}
                  </a>
                );
              }

              return (
                <Link href={href}>
                  <a {...rest}>{children}</a>
                </Link>
              );
            },
          }}
        />
      </div>
    </div>
  );
};

export default PostDetail;
