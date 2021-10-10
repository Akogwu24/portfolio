import React from 'react';
import styled from '@emotion/styled';

const ContentWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ContentWrapper;

const Wrapper = styled.div`
  height: 100%;
  @media (min-width: 540px) {
    max-width: 98vw;
    margin: 0 auto;
  }

  @media (min-width: 920px) {
    max-width: 90vw;
    margin: 0 auto;
  }

  @media (min-width: 1120px) {
    max-width: 72vw;
    margin: 0 auto;
  }
`;
