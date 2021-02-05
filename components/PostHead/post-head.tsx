import { Post } from 'types/types';
import Link from 'next/link';
import styled from '@emotion/styled';
import Tag from '../Tag/tag';
import { create } from 'domain';

type Props = {
  title: Post['title'];
  tags: Post['tags'];
  category: Post['category'];
  created_at: Post['created_at'];
};

const Header = styled.header`
  & > * {
    border-left: 0.3125rem solid black;
    padding-left: 0.5rem;
    margin: 0.25rem 0;
  }

  @media screen and (max-width: 900px) {
    font-size-adjust: 0.5;
    line-height: 1;
  }
`;

const Title = styled.h1`
  letter-spacing: -0.05em;
  font-size: 2.2rem;
  font-feature-settings: 'zero', 'ss01', 'cv01';
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  font-family: 'Iosevka';
  font-weight: 600;
  font-size: 1rem;

  & > * {
    margin-right: 0.3125rem;
  }
`;

const Category = styled.a`
  border: 0.25rem solid ${(props) => props.theme.darkerColor};
  padding: 0 0.2rem;
  background: ${(props) => props.color};
  color: black;
`;

const PostHead = ({ title, tags, category, created_at }: Props) => {
  const d = new Date(created_at);

  return (
    <Header>
      <Section>
        <Link
          as={`/category/${category.slug}`}
          href='/category/[slug]'
          passHref
        >
          <Category color={category.color}>{category.name}</Category>
        </Link>
        <span>{created_at}</span>
        <span>Rev.2</span>
      </Section>
      <Title>
        <Link as={`/posts/${title}`} href='/posts/[slug]' passHref>
          <a aria-label={title}>{title}</a>
        </Link>
      </Title>
    </Header>
  );
};

export default PostHead;
