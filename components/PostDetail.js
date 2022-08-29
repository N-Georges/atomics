/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import { RichText } from "@graphcms/rich-text-react-renderer";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

const readingTime = require("reading-time");

const PostDetail = ({ post, url, source }) => {
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
  console.log(post);
  return (
    <div>
      {/* header Post */}
      <div>
        <h1 className="text-lg sm:text-xl lg:text-4xl font-bold ">
          {post.title}{" "}
          <button
            onClick={() => copy()}
            className="font-semibold ml-1 items-center text-gray-400 hidden md:inline-flex"
          >
            {copied ? (
              <span className="text-sm cursor-default">Copied!</span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-500 cursor-pointer"
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
            <FacebookShareButton
              url={url}
              quote={post.excerpt}
              hashtag={`#${post.categories[0].name}`}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton
              url={url}
              title={post.title}
              hashtag={`#${post.categories[0].name}`}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <LinkedinShareButton url={url} title={post.title} source={source}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <button
              onClick={() => copy()}
              className="ml-6 text-gray-400 hover:text-gray-500 md:hidden p-1 bg-gray-300 rounded-full"
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
            Asset: {
              image: ({ children }) => (
                <div className="h-72 w-full relative mb-8">
                  <Image
                    src={children.src}
                    alt={children.title}
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                    className="rounded-md"
                  />
                </div>
              ),
            },
            // img: ({ children }) => (
            //   <div className="h-72 w-full relative mb-8">
            //     <Image
            //       src={children.src}
            //       alt="image"
            //       layout="fill"
            //       objectFit="cover"
            //       priority={true}
            //       className="rounded-md"
            //     />
            //   </div>
            // ),
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
