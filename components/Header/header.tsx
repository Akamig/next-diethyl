import React from 'react';
import styled from '@emotion/styled';

const Box = styled.header`
  padding: 0.25rem 0.5rem;
`;
const Text = styled.p`
  font-family: 'InterDisplay';
  display: inline-block;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1;
  letter-spacing: -0.02rem;
  padding: 0.125rem;
  margin-right: 0.25rem;
  vertical-align: middle;
  color: #eec;
`;

const Header = ({}) => {
  return (
    <Box>
      <Text>Akamig</Text>
    </Box>
  );
};

export default Header;
