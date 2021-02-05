import React from 'react';
import { useTheme } from '@emotion/react';

import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import Container from 'components/Container/container';
import PostListContainer from 'components/PostListContainer/post-list-container';
import { getAllPosts } from 'utils/api';

export default function IndexPage({ posts }) {
  const theme = useTheme();
  return (
    <Layout title='Ethyl'>
      <PostListContainer posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = (await getAllPosts()) || [];
  return {
    props: {
      posts,
    },
  };
}
