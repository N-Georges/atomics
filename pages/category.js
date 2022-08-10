import React from "react";
import { getCategories, getCategoryPost, getPosts } from "../lib/hygraph";
import PostCard from "../components/PostCard";
import Categories from "../components/Categories";
import FilterCategories from "../components/FilterCategories";

const category = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12">
      <div className="md:col-span-8 divide-y col-span-1 px-10 my-5 min-h-screen border-b space-y-5 md:border-b-0 md:border-r">
        <FilterCategories />
        {posts.map((post, index) => (
          <PostCard key={index} post={post.node} />
        ))}
      </div>
      <div className="md:col-span-4 col-span-1 p-5 h-screen hidden md:inline">
        <div className="md:sticky relative top-8  h-screen">
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default category;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: {
      posts,
    },
  };
}
