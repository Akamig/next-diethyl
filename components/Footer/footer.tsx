import React from 'react';
import styled from '@emotion/styled';

const FooterWrap = styled.footer`
  @media screen and (min-width: 900px) {
    grid-area: 2 / 1 / 2 / 3;
  }
  text-align: center;
  color: ${(props) => props.theme.darkerColor};
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
