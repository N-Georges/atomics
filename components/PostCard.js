import Image from "next/image";
import React from "react";
import Link from "next/link";
import moment from "moment";

const PostCard = ({ post }) => {
  return (
    <>
      <div className="mx-5 py-5">
        <div className="flex items-center space-x-2 justify-end">
          <Image
            src={post.author.picture.url}
            alt={post.author.name}
            width={30}
            height={30}
            className="rounded-full"
          />
          <p className="">{post.author.name}</p>
          <span>·</span>
          <time
            className="text-gray-500"
            dateTime={moment(post.createdAt).format("DD MMM, YYYY")}
          >
            {moment(post.createdAt).format("DD MMM, YYYY")}
          </time>
        </div>
        <div className="flex relative space-x-5 py-10 ">
          <Link as={`/post/${post.slug}`} href={`/post/${post.slug}`}>
            <a>
              <Image
                src={post.coverImage.url}
                alt={post.title}
                layout="fixed"
                objectFit="cover"
                width={100}
                height={100}
                quality={100}
                priority={true}
                className="cursor-pointer rounded-md"
              />
            </a>
          </Link>
          <div>
            <Link href={`/post/${post.slug}`}>
              <a className="font-bold tracking-wide cursor-pointer hover:underline">
                {post.title}
              </a>
            </Link>
            <p className="text-gray-500">{post.excerpt}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
