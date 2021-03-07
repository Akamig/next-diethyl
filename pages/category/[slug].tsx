import React from 'react';

import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import Layout from 'components/Layout/Layout';
import { Category, Post } from 'types/types';
import { Container } from 'next/app';
import { PagedPostBySlug } from 'utils/api';
import PostListContainer from 'components/PostListContainer/post-list-container';
import Pagination from 'components/Pagination/pagination';

type Props = {
  posts: Post[];
  page: number;
  lastPage: number;
  slug: Category['slug'];
};

export default function CategoryList({ posts, page, lastPage, slug }: Props) {
  const router = useRouter();
  return (
    <Layout title={`Category | ${slug}`}>
      <Container>
        {router.isFallback ? (
          <ErrorPage statusCode={404} />
        ) : (
          <PostListContainer posts={posts} />
        )}
        <Pagination
          basePath={`/category/${slug}`}
          page={page}
          lastPage={lastPage}
        />
      </Container>
    </Layout>
  );
}

export async function getServerSideProps({ query })
{
  const slug = query.slug;
  const page = parseInt(query.page) || 1;
  const data = await PagedPostBySlug(page, slug, 'category');
  return {
    props: {
      posts: data.posts,
      page,
      lastPage: data.lastPage,
      slug,
    },
  };
}
