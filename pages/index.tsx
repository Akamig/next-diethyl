import React, { ReactNode } from 'react';

import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import Container from 'components/Container/container';

import { getPosts } from 'utils/api';

export default function IndexPage({ posts }) {
  return (
    <Layout title='Blogmig'>
      <Container>
        <h1>Blogmig.</h1>
        <ul>
          {posts.map((post) => (
            <li key={`post__${post.id}`}>
              <Link
                as={`/posts/${post.id}`}
                href='/posts/[id]'
              >
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: {
      posts,
    },
  };
}
