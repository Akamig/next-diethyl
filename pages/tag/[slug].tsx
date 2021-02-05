import React from 'react';

import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import Layout from 'components/Layout/Layout';
import { Tag, Post } from 'types/types';
import { PagedPostBySlug } from 'utils/api';
import PostListContainer from 'components/PostListContainer/post-list-container';
import Pagination from 'components/Pagination/pagination';

type Props = {
  posts: Post[];
  page: number;
  lastPage: number;
  slug: Tag['slug'];
};

export default function TagList({ posts, page, lastPage, slug }: Props) {
  const router = useRouter();
  return (
    <Layout title={`Tag | ${slug}`}>
        {router.isFallback ? (
          <ErrorPage statusCode={404} />
        ) : (
          <PostListContainer title={posts.name} posts={posts} />
        )}
        <Pagination
          basePath={`/tag/${slug}`}
          page={page}
          lastPage={lastPage}
        />
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const slug = query.slug;
  const page = parseInt(query.page) || 1;
  const data = await PagedPostBySlug(page, slug, 'tags');
  return {
    props: {
      posts: data.posts,
      page,
      lastPage: data.lastPage,
      slug,
    },
  };
}
