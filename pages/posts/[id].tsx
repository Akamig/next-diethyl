import React from 'react';

import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import PostHead from 'components/PostHead/post-head';
import PostBody from 'components/PostBody/post-body';
import Container from 'components/Container/container';

import Layout from 'components/Layout/Layout';
import { getPost, getPosts } from '../../utils/api';
import markdownToHtml from '../../utils/markdownToHtml';
import { Post as Posttype } from 'types/types';

type Params = {
  params: {
    id: string;
  };
};

type Props = {
  post: Posttype;
};

export default function Post({ post }: Props) {
  const router = useRouter();
  return (
    <Layout title={post.title}>
      <Container>
        {router.isFallback ? (
          <ErrorPage statusCode={404} />
        ) : (
          <>
            <article>
              <PostHead title={post.title} tags={post.tags} />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

//TODO: API parse from strapi
export async function getStaticProps({ params }: Params) {
  const post = await getPost(params.id);
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
  const posts = (await getPosts()) || [];
  return {
    paths: posts.map((posts) => {
      return {
        params: {
          id: posts.id,
        },
      };
    }),
    fallback: false,
  };
}
