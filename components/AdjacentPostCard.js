import React from "react";
import Link from "next/link";

const AdjacentPostCard = ({ post, position }) => (
  <>
    {position === "LEFT" && (
      <div className="flex-col">
        <div className="text-start ml-1 text-sm text-gray-200">
          previous post
        </div>
        <div className="flex justify-start items-center">
          <Link as={`/post/${post.slug}`} href={`/post/${post.slug}`}>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 17l-5-5m0 0l5-5m-5 5h12"
                />
              </svg>
            </a>
          </Link>
          <Link as={`/post/${post.slug}`} href={`/post/${post.slug}`}>
            <a className="text-gray-500 w-20 sm:w-32 md:w-20 lg:w-28 truncate text-left">
              {post.title}
            </a>
          </Link>
        </div>
      </div>
    )}
    {position === "RIGHT" && (
      <div className="flex-col">
        <div className="text-end mr-1 text-sm text-gray-200">next post</div>

        <div className="flex justify-end items-center">
          <Link as={`/post/${post.slug}`} href={`/post/${post.slug}`}>
            <a className="text-gray-400 w-20 sm:w-32 md:w-20 lg:w-28 text-right truncate">
              {post.title}
            </a>
          </Link>
          <Link as={`/post/${post.slug}`} href={`/post/${post.slug}`}>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    )}
  </>
);

export default AdjacentPostCard;
