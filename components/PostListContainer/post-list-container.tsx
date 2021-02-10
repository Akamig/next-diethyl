import React from 'react';
import PostCard from '../PostCard/post-card';
import styled from '@emotion/styled';
import { Post } from 'types/types';

type Props = {
  posts: Post[];
};

const Container = styled.div`
  & > * {
    border-left: .375rem solid black;
    padding-left: .5rem;
    margin: 0.375rem 0;
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
