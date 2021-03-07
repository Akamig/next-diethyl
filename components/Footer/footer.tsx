import React from 'react';
import styled from '@emotion/styled';

const FooterWrap = styled.footer`
  @media screen and (min-width: 900px) {
    grid-area: 2 / 1 / 2 / 3;
  }
  font-weight: 500;
  padding: 0.5rem;
  margin-bottom: 10rem;
  color: ${(props) => props.theme.color.text};
  background-color: ${(props) => props.theme.color.sub};
`;

const Footer = () => {
  return (
    <FooterWrap>
      <hr />
      <div>
        <img src='/favicon.svg' style={{ height: '60px' }}></img>
      </div>
      <span>Akamig 2020. Alright, Resurrected. </span>
    </FooterWrap>
  );
};

export default Footer;
