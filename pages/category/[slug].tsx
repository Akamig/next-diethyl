import React from 'react';

import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import Layout from 'components/Layout/Layout';
import PostCard from 'components/PostCard/post-card';
import { Category } from 'types/types';
import { Container } from 'next/app';
import { getPostsByCategory, getAllCategories } from 'utils/api';

type Props = {
  category: Category[];
};
type Params = {
  params: {
    slug: Category['slug'];
  };
};

export default function CategoryList({ category }: Props) {
  const router = useRouter();
  return (
    <Layout title={`Category | ${category.name}`}>
      <Container>
        {router.isFallback ? (
          <ErrorPage statusCode={404} />
        ) : (
          <>
            <h1>{category.name}</h1>
            <ul>
              {category.posts.map((post) => (
                <PostCard key={`${post.slug}__post`} post={post} />
              ))}
            </ul>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }: Params) {
  const category = await getPostsByCategory(params.slug);
  return {
    props: {
      category: {
        ...category,
      },
    },
  };
}

export async function getStaticPaths() {
  const categories = (await getAllCategories()) || [];
  return {
    paths: categories.map((category) => {
      return {
        params: {
          slug: category.slug,
        },
      };
    }),
    fallback: false,
  };
}
