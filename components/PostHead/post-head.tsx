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
    border-left: 0.375rem solid black;
    padding: 0 0.5rem;
    margin-bottom: 0.5rem;
  }

  @media screen and (max-width: 900px) {
    font-size-adjust: 0.5;
    line-height: 1;­
  }
`;

const Title = styled.h1`
  letter-spacing: -.05rem;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
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
    margin-right: 0.375rem;
  }
`;

const Category = styled.a`
  line-height: 1.3;
  border: 0.25rem solid ${(props) => props.theme.darkerColor};
  padding: 0 0.25rem;
  background: ${(props) => props.color};
  color: black;
`;

const PostHead = ({ title, tags, category, slug, created_at }: Props) => {
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
        <Link as={`/post/${slug}`} href='/post/[slug]' passHref>
          <a aria-label={title}>{title}</a>
        </Link>
      </Title>
    </Header>
  );
};

export default PostHead;
