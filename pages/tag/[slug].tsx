import React from 'react';

import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import Layout from 'components/Layout/Layout';
import PostCard from 'components/PostCard/post-card';
import { Tag } from 'types/types';
import { Container } from 'next/app';
import { getPostsByTag, getAllTags } from 'utils/api';

type Props = {
  tag: Tag;
};
type Params = {
  params: {
    slug: Tag['slug'];
  };
};

export default function TagList({ tag }: Props) {
  const router = useRouter();
  return (
    <Layout title={`Tag | ${tag.name}`}>
      <Container>
        {router.isFallback ? (
          <ErrorPage statusCode={404} />
        ) : (
          <>
            <h1>{tag.name}</h1>
            <ul>
              {tag.posts.map((post) => (
                <PostCard post={post} />
              ))}
            </ul>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }: Params) {
  const tag = await getPostsByTag(params.slug);
  return {
    props: {
      tag: {
        ...tag,
      },
    },
  };
}

export async function getStaticPaths() {
  const tags = (await getAllTags()) || [];
  return {
    paths: tags.map((tag) => {
      return {
        params: {
          slug: tag.slug,
        },
      };
    }),
    fallback: false,
  };
}
