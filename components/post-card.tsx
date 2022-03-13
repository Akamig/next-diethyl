import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import Tag from './tag';
import { Post } from 'types/types';

type Props = {
  post: Post;
};

const PostBox = styled.div`
  padding: 0.5rem;
  border-left: 0.375rem solid black;
  :hover {
    background-color: ${(props) => props.theme.color.highlight};
    color: ${(props) => props.theme.color.white};
  }
  font-weight: 600;
  font-feature-settings: 'ss01', 'cv01';
  line-height: 1.25;
`;

const Date = styled.time``;

const Title = styled.h1`
  margin-bottom: 0.25rem;
  font-size: 1.375rem;
  font-weight: 700;
  letter-spacing: -0.04em;
`;

const Meta = styled.div`
  font-size: 0.75rem;
  font-feature-settings: 'tnum', 'ss01', 'cv01';
`;

const Category = styled.a`
  color: ${(props) => props.theme.textColor};
  border-top: 3px solid ${(props) => props.color};
`;

const Tags = styled(Tag)``;

const PostCard = ({ post }: Props) => {
  return (
    <PostBox>
      <Meta>
        <Date dateTime={post.created_at}>{post.created_at} </Date>
        <Link
          as={`/category/${post.category.slug}`}
          href='/category/[slug]'
          passHref
        >
          <Category color={post.category.color}>{post.category.name}</Category>
        </Link>
      </Meta>
      <Title>
        <Link as={`/post/${post.slug}`} href='/post/[slug]'>
          <a>{post.title}</a>
        </Link>
      </Title>
      <Tags tags={post.tags}></Tags>
    </PostBox>
  );
};

export default PostCard;
