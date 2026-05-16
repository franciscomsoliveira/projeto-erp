import styled, { css } from "styled-components";

export const TabsContainer = styled.div`
  width: 100%;
`;

export const TabsList = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};

  overflow-x: auto;

  padding-bottom: ${({ theme }) => theme.spacing.sm};

  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const TabButton = styled.button`
  height: 40px;

  padding: 0 16px;

  border-radius: ${({ theme }) => theme.radius.md};

  background: ${({ theme }) => theme.colors.surface};

  border: 1px solid ${({ theme }) => theme.colors.border};

  color: ${({ theme }) => theme.colors.textSoft};

  white-space: nowrap;

  cursor: pointer;

  transition: all ${({ theme }) => theme.transitions.fast};

  ${({ $active, theme }) =>
    $active &&
    css`
      background: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    `}
`;

export const TabsContent = styled.div`
  min-width: 0;
`;
