import React from "react";
import { useRouter } from "next/router";
import Author from "../../components/Author";
import Categories from "../../components/Categories";
import Comments from "../../components/Comments";
import CommentsForm from "../../components/CommentsForm";
import Layout from "../../components/Layout";
import PostDetail from "../../components/PostDetail";
import PostWidget from "../../components/PostWidget";
import { getPosts, getPostDetails } from "../../lib/hygraph";

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return "loading";
  }
  return (
    <Layout>
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-8 col-span-1 px-10 my-5 min-h-screen border-b space-y-5 md:border-b-0 md:border-r">
            <PostDetail post={post} />
            <Author author={post.author} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
          <div className="md:col-span-4 col-span-1 p-5 h-screen">
            <div className="md:sticky relative top-8 h-screen">
              <PostWidget
                slug={post.slug}
                categories={post.categories.map((category) => category.slug)}
              />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Post;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
