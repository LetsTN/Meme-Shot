import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 10rem 0 4rem 0;
`;

export const Title = styled.h1`
  font-family: "Lobster", "Josefin Sans", Helvetica, Arial, sans-serif;
  font-size: 6rem;
  color: var(--purple);
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 45rem;

  @media (max-width: 766px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Button = styled.button`
  font-family: "Josefin Sans", Helvetica, Arial, sans-serif;
  font-size: 1.6rem;
  background-color: var(--purple);
  color: var(--white);
  cursor: pointer;
  border: none;
  border-radius: 4px;
  width: 9rem;
  padding: 0.5rem;
  margin-top: 2rem;

  &.selected {
    background-color: var(--pink);
  }

  @media (max-width: 766px) {
    width: 100%;
  }
`;
