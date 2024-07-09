import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.footerBg};

  p {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.footerText};
  }
`;
