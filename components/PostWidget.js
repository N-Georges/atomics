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
    <div className="border rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="flex-none">
            <Image
              src={post.coverImage.url}
              alt={post.title}
              width={60}
              height={60}
              objectFit="cover"
              quality={100}
              priority={true}
              className="rounded-md"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-xs">
              <time
                className="text-gray-500"
                dateTime={moment(post.createdAt).format("DD MMM, YYYY")}
              >
                {moment(post.createdAt).format("DD MMM, YYYY")}
              </time>
            </p>
            <Link href={`/post/${post.slug}`}>
              <a className="text-sm">{post.title}</a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
