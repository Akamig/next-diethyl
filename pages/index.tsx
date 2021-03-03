import React from 'react';

import Layout from '../components/Layout/Layout';
import PostListContainer from 'components/PostListContainer/post-list-container';
import { getAllPosts } from 'utils/api';

export default function IndexPage({ posts }) {
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
