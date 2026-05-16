import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;

  background: ${({ theme }) => theme.colors.background};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 20px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;

  a {
    color: ${({ theme }) => theme.colors.primary};

    font-size: 0.875rem;
    font-weight: 600;

    text-decoration: none;

    transition: 0.2s;

    &:hover {
      opacity: 0.8;
      text-decoration: underline;
    }
  }
`;
