import React from 'react';
import styled from '@emotion/styled';

const Box = styled.header`
  background-color: #f01;
  color: #202;
  padding: 0.25rem 0.5rem;
`;
const Text = styled.p`
  font-family: 'InterDisplay';
  display: inline-block;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1;
  letter-spacing: -0.02rem;
  padding: 0.125rem;
  vertical-align: middle;
`;

const Header = ({}) => {
  return (
    <Box>
      <Text>Akamig</Text>
    </Box>
  );
};

export default Header;
