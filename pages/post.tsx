import React from 'react';

import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import Layout from 'components/Layout/Layout';
import PostCard from 'components/PostCard/post-card';
import { Container } from 'next/app';
import { getAllPosts } from '../utils/api';
import { Post } from 'types/types';

type Props = {
  posts: Post[];
};

export default function PostList({ posts }: Props) {
  const router = useRouter();
  return (
    <Layout title='Posts'>
      <Container>
        {router.isFallback ? (
          <ErrorPage statusCode={404} />
        ) : (
          <>
            <h1>Posts</h1>
            <ul>
              {posts.map((post) => (
                <PostCard post={post} />
              ))}
            </ul>
          </>
        )}
      </Container>
    </Layout>
  );
}

//TODO: API parse from strapi
export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
