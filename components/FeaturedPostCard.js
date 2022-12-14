import React, { useEffect, useState } from "react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { SkeletonFeaturedCard } from "./SkeletonFeaturedCard";

const FeaturedPostCard = ({ post }) => {
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
    //     <SkeletonFeaturedCard />
    //   ) : (
    //     <div className="relative h-72">
    //       <div className="h-72 w-full relative my-8 bg-cover shadow-md rounded-lg bg-center">
    //         <Image
    //           src={post.coverImage.url}
    //           alt={post.title}
    //           layout="fill"
    //           objectFit="cover"
    //           priority={true}
    //           className="rounded-md"
    //         />
    //         <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
    //         <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
    //           <p className="text-white mb-4 text-shadow font-semibold text-xs">
    //             {moment(post.createdAt).format("MMM DD, YYYY")}
    //           </p>
    //           <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">
    //             {post.title}
    //           </p>
    //           <div className="flex items-center absolute bottom-5 w-full justify-center">
    //             <Image
    //               unoptimized
    //               alt={post.author.name}
    //               height="30px"
    //               width="30px"
    //               className="align-middle drop-shadow-lg rounded-full"
    //               src={post.author.picture.url}
    //             />
    //             <p className="inline align-middle text-white text-shadow ml-2 font-medium">
    //               {post.author.name}
    //             </p>
    //           </div>
    //         </div>
    //         <Link as={`/post/${post.slug}`} href={`/post/${post.slug}`}>
    //           <span className="cursor-pointer absolute w-full h-full" />
    //         </Link>
    //       </div>
    //     </div>
    //   )}
    // </>
    <div className="relative h-72">
      <div className="h-72 w-full relative my-8 bg-cover shadow-md rounded-lg bg-center">
        <Image
          src={post.coverImage.url}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          priority={true}
          className="rounded-md"
        />
        <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
        <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
          <p className="text-white mb-4 text-shadow font-semibold text-xs">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </p>
          <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">
            {post.title}
          </p>
          <div className="flex items-center absolute bottom-5 w-full justify-center">
            <Image
              unoptimized
              alt={post.author.name}
              height="30px"
              width="30px"
              className="align-middle drop-shadow-lg rounded-full"
              src={post.author.picture.url}
            />
            <p className="inline align-middle text-white text-shadow ml-2 font-medium">
              {post.author.name}
            </p>
          </div>
        </div>
        <Link as={`/post/${post.slug}`} href={`/post/${post.slug}`}>
          <a>
            <span className="cursor-pointer absolute w-full h-full" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPostCard;
