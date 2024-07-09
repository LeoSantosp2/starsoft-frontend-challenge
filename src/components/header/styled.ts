import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 10vh;
  padding: 0 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};

  h1 {
    font-size: 2rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.primary};
  }

  h1 span {
    font-size: 4rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  button {
    width: 9rem;
    height: 4rem;
    border-radius: 0.8rem;
    font-size: 1.8rem;
    border: 0;
    font-weight: 700;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
