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

export const LojaList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 16px;
`;

export const LojaCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 16px;

  padding: 20px;

  border-radius: ${({ theme }) => theme.radius.lg || "16px"};

  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};

  transition: 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-1px);
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const LojaInfo = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4px;

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.95rem;
  }

  span {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.8rem;
  }
`;
