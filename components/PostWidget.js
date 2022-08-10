import React, { useEffect, useState } from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "../lib/hygraph";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [categories, slug]);

  return (
    <div className="border rounded-lg p-6 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      <div className="space-y-3 flex-col horizontal-scroll overflow-y-scroll h-44">
        {relatedPosts.map((post) => (
          <div
            key={post.title}
            className="flex items-center space-x-3 p-2 w-full "
          >
            <div className="flex-none hidden lg:inline-block">
              <Link as={`/post/${post.slug}`} href={`/post/${post.slug}`}>
                <Image
                  src={post.coverImage.url}
                  alt={post.title}
                  width={65}
                  height={65}
                  objectFit="cover"
                  quality={100}
                  priority={true}
                  className="rounded-md cursor-pointer"
                />
              </Link>
            </div>
            <div className="">
              <p className="text-xs">
                <time
                  className="text-gray-500"
                  dateTime={moment(post.createdAt).format("DD MMM, YYYY")}
                >
                  {moment(post.createdAt).format("DD MMM, YYYY")}
                </time>
              </p>
              <Link href={`/post/${post.slug}`}>
                <a className="text-xs lg:text-sm hover:underline">
                  {post.title}
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostWidget;
