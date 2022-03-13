import React from 'react';
import PostCard from './post-card';
import styled from '@emotion/styled';
import { Post } from 'types/types';

type Props = {
  posts: Post[];
};

const Container = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 0.375rem;
  }
`;

const PostListContainer = ({ posts }: Props) => {
  return (
    <Container>
      {posts.map((post) => (
        <PostCard key={`${post.slug}__post`} post={post} />
      ))}
    </Container>
  );
};

export default PostListContainer;
