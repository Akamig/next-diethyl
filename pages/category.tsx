import React from 'react';
import Link from 'next/link';

import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import Layout from 'components/Layout';
import { Container } from 'next/app';
import { getAllCategories } from '../utils/api';
import { Category } from 'types/types';

type Props = {
  categories: Category[];
};

export default function CategotyList({ categories }: Props) {
  const router = useRouter();
  return (
    <Layout title='Category'>
        {router.isFallback ? (
          <ErrorPage statusCode={404} />
        ) : (
          <>
            <h1>Category</h1>
            <ul>
              {categories.map((category) => (
                <li key={`${category.slug}__tag`}>
                  <Link as={`/category/${category.slug}`} href='/category/[slug]'>
                    <a>{category.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
    </Layout>
  );
}

//TODO: API parse from strapi
export async function getStaticProps() {
  const categories = await getAllCategories();
  return {
    props: {
      categories,
    },
  };
}
