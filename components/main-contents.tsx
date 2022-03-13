import styled from '@emotion/styled';
type Props = {
  children?: React.ReactNode;
};

const Main = styled.main`
  background-color: ${(props) => props.theme.color.sub};
  padding: 1rem;
`;

const MainContents = ({ children }: Props) => {
  return (
    <Main>
      {children}
    </Main>
  );
};

export default MainContents;
