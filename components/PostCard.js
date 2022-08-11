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
  console.log(post.categories[0].name);
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
          <Link as={`/post/${post.slug}`} href={`/post/${post.slug}`}>
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
          <Image
            src={post.coverImage.url}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            priority={true}
            className="rounded-md"
          />
        </div>
        <div>
          <Link href={`/post/${post.slug}`}>
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
      </div>
    </div>
  );
};

export default PostCard;
