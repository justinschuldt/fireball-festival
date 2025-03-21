import styled from 'styled-components';

export const EventFigure = styled.figure`
  display: grid;
  grid-template-columns: minmax(9rem, 16rem) minmax(24rem, 96rem);
  gap: 0.8rem;
`;

export const Time = styled.p`
  grid-column: 1;
  display: block;
  font-weight: 400;
  font-size: 1.8rem;
  max-width: 20rem;
  // justify-self: end;
`;

export const Name = styled.p`
  grid-column: 2;
  display: block;
  font-weight: 400;
  font-size: 1.8rem;
`;

export const Description = styled.span`
  grid-column: 2;
  display: block;
  padding: 0.8rem 1.4rem;
  font-size: 1.5rem;
  font-weight: normal;
`;

export const Files = styled.span`
  grid-column: 2;
  display: block;
  padding-left: 1rem;
  font-size: 1.5rem;
  font-weight: normal;
  list-style: bullet;
`;

export const Link = styled.a`
  padding: 0.8rem 1.4rem;
`;
