import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import moment from "moment";
import { SkeletonPostCard } from "./SkeletonPostCard";

const PostCard = ({ post }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (post) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [post]);
  return (
    // <>
    //   {loading ? (
    //     <SkeletonPostCard />
    //   ) : (
    //     <div className="pt-5 ">
    //       <div className="flex items-center space-x-2 justify-start ">
    //         <Image
    //           src={post.author.picture.url}
    //           alt={post.author.name}
    //           width={30}
    //           height={30}
    //           className="rounded-full"
    //         />
    //         <p className="text-sm md:text-base">{post.author.name}</p>
    //         <span>·</span>
    //         <time
    //           className="text-gray-500 text-sm md:text-base"
    //           dateTime={moment(post.createdAt).format("DD MMM, YYYY")}
    //         >
    //           {moment(post.createdAt).format("DD MMM, YYYY")}
    //         </time>
    //       </div>
    //       <div className="sm:flex relative sm:space-x-5 py-5 sm:py-10">
    //         <div className="hidden sm:inline-block">
    //           <Link as={`/post/${post.slug}`} href={`/post/${post.slug}`}>
    //             <a>
    //               <Image
    //                 src={post.coverImage.url}
    //                 alt={post.title}
    //                 layout="fixed"
    //                 objectFit="cover"
    //                 width={100}
    //                 height={100}
    //                 quality={100}
    //                 priority={true}
    //                 className="cursor-pointer rounded-md"
    //               />
    //             </a>
    //           </Link>
    //         </div>
    //         <div className="h-40 w-full relative mb-3 sm:hidden">
    //           <Image
    //             src={post.coverImage.url}
    //             alt={post.title}
    //             layout="fill"
    //             objectFit="cover"
    //             priority={true}
    //             className="rounded-md"
    //           />
    //         </div>
    //         <div>
    //           <Link href={`/post/${post.slug}`}>
    //             <a className="font-bold tracking-wide cursor-pointer hover:underline">
    //               {post.title}
    //             </a>
    //           </Link>

    //           <p className="text-gray-500 bg-red-500">
    //             {post.categories.name}
    //           </p>
    //           <p className="text-gray-500">{post.excerpt}</p>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </>
    <div className="pt-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2 justify-start">
          <Image
            src={post.author.picture.url}
            alt={post.author.name}
            width={30}
            height={30}
            className="rounded-full"
          />
          <p className="text-sm md:text-base">{post.author.name}</p>
          <span>·</span>
          <time
            className="text-gray-500 text-sm md:text-base"
            dateTime={moment(post.createdAt).format("DD MMM, YYYY")}
          >
            {moment(post.createdAt).format("DD MMM, YYYY")}
          </time>
        </div>
        <div>
          {post.categories.map((category) => (
            <div key={category.slug} className="hidden md:inline">
              #{category.name}
            </div>
          ))}
        </div>
      </div>
      <div className="sm:flex relative sm:space-x-5 py-5 ">
        <div className="hidden sm:inline-block">
          <Link as={`/post/${post.slug}`} href={`/post/${post.slug}`} passHref>
            <a>
              <Image
                src={post.coverImage.url}
                alt={post.title}
                layout="fixed"
                objectFit="cover"
                width={250}
                height={150}
                quality={100}
                priority={true}
                className="cursor-pointer rounded-md"
              />
            </a>
          </Link>
        </div>
        <div className="h-40 w-full relative mb-3 sm:hidden">
          <Link as={`/post/${post.slug}`} href={`/post/${post.slug}`} passHref>
            <Image
              src={post.coverImage.url}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              priority={true}
              className="rounded-md cursor-pointer"
            />
          </Link>
        </div>
        <div>
          <Link as={`/post/${post.slug}`} href={`/post/${post.slug}`} passHref>
            <a className="font-bold tracking-wide cursor-pointer hover:underline">
              {post.title}
            </a>
          </Link>
          <div className="md:hidden">
            {post.categories.map((category) => (
              <p key={category.slug}>#{category.name}</p>
            ))}
          </div>
          <p className="text-gray-500 max-w-md">{post.excerpt}</p>
        </div>
        <Link
          as={`/post/${post.slug}/#comment`}
          href={`/post/${post.slug}/#comment`}
        >
          <a className="flex md:justify-end items-end mt-2 md:mt-0 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span className="font-semibold">{post.comments.length}</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
