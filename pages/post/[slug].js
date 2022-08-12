import React from "react";
import { useRouter } from "next/router";
import Author from "../../components/Author";
import Categories from "../../components/Categories";
import Comments from "../../components/Comments";
import CommentsForm from "../../components/CommentsForm";
import PostDetail from "../../components/PostDetail";
import PostWidget from "../../components/PostWidget";
import { getPosts, getPostDetails, getSeoPosts } from "../../lib/hygraph";
import Loader from "../../components/Loader";
import AdjacentPosts from "../../section/AdjacentPosts";
import { NextSeo } from "next-seo";

const Post = ({ post, seo }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <>
      <NextSeo
        title={post.title}
        description={post.excerpt}
        canonical={`${seo[0].seo.url}/post/${post.slug}`}
        openGraph={{
          url: `${seo[0].seo.url}/post/${post.slug}`,
          title: `${post.title}`,
          description: `${post.excerpt}`,
          images: [
            {
              url: `${post.coverImage.url}`,
              width: 800,
              height: 600,
              alt: `${post.title}`,
              type: "image/jpeg",
            },
            {
              url: `${post.coverImage.url}`,
              width: 900,
              height: 800,
              alt: `${post.title}`,
              type: "image/jpeg",
            },
            { url: `${post.coverImage.url}` },
            { url: `${post.coverImage.url}` },
          ],
          site_name: "Atomics",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
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
              <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
              <PostWidget
                slug={post.slug}
                categories={post.categories.map((category) => category.slug)}
              />
              <div className="hidden md:inline">
                <Categories />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  const seo = await getSeoPosts();

  return {
    props: {
      post: data,
      seo,
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
