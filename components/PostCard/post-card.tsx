import React from 'react';
import Link from 'next/link';
import { Post } from 'types/types';

type Props = {
  post: Post;
};

const ListCard = ({ post }: Props) => {
  return (
    <li key={`${post.slug}__post`}>
      <Link as={`/post/${post.slug}`} href='/post/[slug]'>
        <a>
          <h1>{post.title}</h1>
          <time>{post.created_at}</time>
        </a>
      </Link>
    </li>
  );
};

export default ListCard;