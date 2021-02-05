import styled from '@emotion/styled';

import Link from 'next/link';
import { Post } from 'types/types';

type Props = {
  tags: Post['tags'];
};

const Tagbox = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 0.75rem;
  font-weight: 600;
`;

const Tagbutton = styled.div`
  background-color: ${(props) => props.color};
  color: ${(props) => props.theme.textColor};

  padding: 0.15rem 0.4rem;
  margin: 0.1rem;
  border-radius: 1em;
`;

const Tag = ({ tags }: Props) => {
  return tags ? (
    <Tagbox>
      {tags.map((tag) => (
        <Tagbutton key={`${tag.slug}__tag`} color={tag.color}>
          <Link as={`/tag/${tag.slug}`} href='/tag/[slug]'>
            <a>{tag.name}</a>
          </Link>
        </Tagbutton>
      ))}
    </Tagbox>
  ) : null;
};

export default Tag;
