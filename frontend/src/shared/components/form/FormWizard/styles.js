import styled, { css } from "styled-components";

export const WizardContainer = styled.div`
  width: 100%;
`;

export const WizardSteps = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.sm};

  margin-bottom: ${({ theme }) => theme.spacing.lg};

  ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
  }
`;

export const WizardStep = styled.div`
  flex: 1;

  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.spacing.sm};

  padding: ${({ theme }) => theme.spacing.md};

  border-radius: ${({ theme }) => theme.radius.md};

  background: ${({ theme }) => theme.colors.surface};

  border: 1px solid ${({ theme }) => theme.colors.border};

  span {
    width: 28px;
    height: 28px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: ${({ theme }) => theme.radius.round};

    background: ${({ theme }) => theme.colors.surfaceStrong};
  }

  ${({ $active, theme }) =>
    $active &&
    css`
      border-color: ${theme.colors.primary};

      span {
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
      }
    `}

  ${({ $completed, theme }) =>
    $completed &&
    css`
      border-color: ${theme.colors.success};

      span {
        background: ${theme.colors.success};
        color: ${theme.colors.white};
      }
    `}
`;

export const WizardContent = styled.div`
  min-width: 0;
`;
