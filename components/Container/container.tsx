import styled from '@emotion/styled';
type Props = {
  children?: React.ReactNode;
};

const Main = styled.div`
  padding: 0.5rem;
`;

const Container = ({ children }: Props) => {
  return <Main className='container'>{children}</Main>;
};

export default Container;
