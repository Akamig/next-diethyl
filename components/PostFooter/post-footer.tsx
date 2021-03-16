import { Post } from 'types/types';
import Tag from '../Tag/tag';
import styled from '@emotion/styled';

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const InformationBox = styled.dl`
  flex-basis: 100%;
  flex-shrink: 0;

  ${(props) => props.theme.mediaQuery.sm} {
    flex-basis: 50%;
  }

  padding: 0.125rem;

  dt {
    font-size: 1.125rem;
    padding: 0.125rem 0.5rem 0.25rem 0.5rem;
    letter-spacing: ${(props) => props.theme.letterSpace[1]}rem;
    background-color: ${(props) => props.theme.color.text};
    color: ${(props) => props.theme.color.background};
    font-weight: 600;
  }
  dl {
    font-size: 90%;
    border: 0.125rem solid ${(props) => props.theme.color.text};
    border-top: 0;
    padding: 0.25rem;
    font-weight: 500;
  }
`;

const PostFooter = ({ tags }) => {
  return (
    <Box>
      <InformationBox>
        <dt>Tags</dt>
        <dl>
          <Tag tags={tags} />
        </dl>
      </InformationBox>
      <InformationBox>
        <dt>Author</dt>
        <dl>
          Akamig (akamig@posteo.net) <br />
          Robert Moog (<a href='moog.org'>#moog.org</a>)
        </dl>
      </InformationBox>
      <InformationBox>
        <dt>Description</dt>
        <dl>
          이 글은 32년도에 작성되었는데, 당시 Anthony Fantano의 훼방으로 인해
          은하연방군이 해산되는 결과를 낳게 되었다. 이러한 방향성이 본 글에는
          반영되어있지 않다.
        </dl>
      </InformationBox>
      <InformationBox>
        <dt>Language</dt>
        <dl>Korean</dl>
      </InformationBox>
      <InformationBox>
        <dt>License</dt>
        <dl>
          This file is licensed under the Creative Commons Attribution-Share
          Alike 3.0 Unported, 2.5 Generic, 2.0 Generic and 1.0 Generic license.{' '}
        </dl>
        <dl>GPLv3</dl>
      </InformationBox>
      <InformationBox>
        <dt>Source</dt>
        <dl>
          1. Syria Observatory for Human Rights Syrian Revolution nine years on:
          586 100 persons killed and millions of Syrians displaced and injured.
          https://www.syriahr.com/en/157193/
        </dl>
        <dl>
          2. World Vision International Frontiers Economics Too high a price to
          pay: the cost of conflict for Syria's children.
          https://www.wvi.org/emergencies/syria-crisis-response/syria10/cost-conflict-syrias-children
          Date: March 4, 2021 Date accessed: March 10, 2021
        </dl>
      </InformationBox>
    </Box>
  );
};

export default PostFooter;
