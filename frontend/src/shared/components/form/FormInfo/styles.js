import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  padding: 14px 16px;

  border-radius: ${({ theme }) => theme.radius.md};

  border: 1px solid ${({ theme }) => theme.colors.info};

  background: ${({ theme }) => theme.colors.infoSoft};

  color: ${({ theme }) => theme.colors.info};

  font-size: 0.875rem;
  font-weight: 500;

  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
