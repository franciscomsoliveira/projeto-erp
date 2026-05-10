import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 420px;
`;

export const Logo = styled.div`
  text-align: center;
  margin-bottom: 24px;

  strong {
    display: block;
    font-family: ${({ theme }) => theme.font.heading};
    font-size: 28px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.primary};
  }

  span {
    display: block;
    margin-top: 4px;
    font-size: ${({ theme }) => theme.font.size.sm};
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const ErrorText = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.font.size.sm};
`;
