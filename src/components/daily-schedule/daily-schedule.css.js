import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Heading = styled.h1`
display: block;
margin-bottom: 0;
`;

export const Container = styled.div`
  display: grid;
  padding: 0 4rem;

  ${MEDIA.TABLET`
    display: block;
  `};
`;
