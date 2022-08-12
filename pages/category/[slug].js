import React from "react";
import { useRouter } from "next/router";
import { getCategories, getCategoryPost } from "../../lib/hygraph";
import Loader from "../../components/Loader";
import PostCard from "../../components/PostCard";
import Categories from "../../components/Categories";
import FilterCategories from "../../components/FilterCategories";

const CategoryPost = ({ posts }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-12">
      <div className="md:col-span-8 divide-y col-span-1 px-10 my-5 min-h-screen border-b space-y-5 md:border-b-0 md:border-r">
        <div className="md:hidden">
          <FilterCategories />
        </div>
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
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
