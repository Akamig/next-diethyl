import React from 'react';
import PostCard from '../PostCard/post-card';
import { Post } from 'types/types';

type Props = {
  title: string;
  posts: Post[];
};

const PostListContainer = ({ title, posts }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      {posts.map((post) => (
        <PostCard key={`${post.slug}__post`} post={post} />
      ))}
    </div>
  );
};

export default PostListContainer;
