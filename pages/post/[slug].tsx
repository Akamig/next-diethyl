import React from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import PostHead from 'components/post-head';
import PostBody from 'components/post-body';
import PostFooter from 'components/footer';

import Layout from 'components/Layout';
import { getPostBySlug, getAllPosts } from '../../utils/api';
import markdownToHtml from '../../utils/markdownToHtml';
import { Post as Posttype } from 'types/types';

type Params = {
  params: {
    slug: Posttype['slug'];
  };
};

type Props = {
  post: Posttype;
};

export default function Post({ post }: Props) {
  const router = useRouter();
  return (
    <Layout title={post.title}>
      {router.isFallback ? (
        <ErrorPage statusCode={404} />
      ) : (
        <>
          <PostHead
            title={post.title}
            tags={post.tags}
            category={post.category}
            created_at={post.created_at}
            slug={post.slug}
          />
          <PostBody content={post.content} />
          <PostFooter />
        </>
      )}
    </Layout>
  );
}

//TODO: API parse from strapi
export async function getStaticProps({ params }: Params) {
  const post = await getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || '');
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = (await getAllPosts()) || [];
  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}
