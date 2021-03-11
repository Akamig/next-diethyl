import styled from '@emotion/styled';
type Props = {
  children?: React.ReactNode;
};

const Main = styled.main`
  background-color: ${(props) => props.theme.color.sub};
  min-height: 100vh;
  flex: 1 0 0;
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
