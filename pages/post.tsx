import React from 'react';

import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import Layout from 'components/Layout/Layout';
import PostListContainer from 'components/PostListContainer/post-list-container';
import Pagination from 'components/Pagination/pagination';
import { Container } from 'next/app';
import { PagedAllPosts } from '../utils/api';
import { Post } from 'types/types';

type Props = {
  posts: Post[];
  page: number;
  lastPage: number;
};

export default function PostList({ posts, page, lastPage }: Props) {
  const router = useRouter();
  return (
    <Layout title='Posts'>
      <Container>
        {router.isFallback ? (
          <ErrorPage statusCode={404} />
        ) : (
          <PostListContainer title={`Post`} posts={posts} />
        )}
        <Pagination basePath='/post' page={page} lastPage={lastPage} />
      </Container>
    </Layout>
  );
}

//TODO: API parse from strapi
export async function getServerSideProps({ query }) {
  const page = parseInt(query.page) || 1;
  const data = await PagedAllPosts(page);
  return {
    props: {
      posts: data.posts,
      page,
      lastPage: data.lastPage,
    },
  };
}
