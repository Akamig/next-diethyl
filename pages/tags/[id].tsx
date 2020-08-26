import React from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';
import ErrorPage from 'next/error';

import Layout from 'components/Layout/Layout';
import { Tag as Tagtype } from 'types/types';
import { Container } from 'next/app';
import { getTags, getTag } from 'utils/api';

type Props = {
  tag: Tagtype;
};
type Params = {
  params: {
    id: Tagtype['id'];
  };
};

export default function TagList({ tag }: Props) {
  const router = useRouter();
  console.log(tag);
  return (
    <Layout title={tag.name}>
      <Container>
        {router.isFallback ? (
          <ErrorPage statusCode={404} />
        ) : (
          <>
            <h1>{tag.name}</h1>
            <ul>
              {tag.posts.map((post) => (
                <li key={`post__${post.id}`}>
                  <Link as={`/posts/${post.id}`} href='/posts/[id]'>
                    <a>{post.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }: Params) {
  const tag = await getTag(params.id);
  return {
    props: {
      tag: {
        ...tag,
      },
    },
  };
}

export async function getStaticPaths() {
  const tags = (await getTags()) || [];
  return {
    paths: tags.map((tag) => {
      return {
        params: {
          id: tag.id,
        },
      };
    }),
    fallback: false,
  };
}
