import React from 'react';
import styled from '@emotion/styled';

const FooterWrap = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  margin-bottom: 90vh;
  color: ${(props) => props.theme.color.text};
  background-color: ${(props) => props.theme.color.sub};
`;

const Footer = () => {
  return (
    <FooterWrap>
      <div>
        <img src='/favicon.svg' style={{ height: '60px' }}></img>
      </div>
      <span>Akamig 2020. Alright, Resurrected. </span>
    </FooterWrap>
  );
};

export default Footer;
