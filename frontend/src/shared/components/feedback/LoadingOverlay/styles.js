import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.45);

  backdrop-filter: blur(6px);

  z-index: ${({ theme }) => theme.zIndex.modal};
`;

export const Box = styled.div`
  min-width: 220px;

  padding: ${({ theme }) => theme.spacing.lg};

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: ${({ theme }) => theme.spacing.md};

  border-radius: ${({ theme }) => theme.radius.lg};

  background: ${({ theme }) => theme.colors.surface};

  border: 1px solid ${({ theme }) => theme.colors.border};

  box-shadow: ${({ theme }) => theme.shadows.lg};

  color: ${({ theme }) => theme.colors.primary};
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.text};

  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;
