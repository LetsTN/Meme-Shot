import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: "Josefin Sans", Helvetica, Arial, sans-serif;
  font-size: 4rem;
  color: var(--pink);
  margin-bottom: 4rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 766px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  img {
    max-width: 30rem;
  }
`;
