import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  padding: ${({ theme }) => theme.spacing.xl};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  border: 1px solid ${({ theme }) => theme.colors.danger};
  border-radius: ${({ theme }) => theme.radius.lg};

  background: ${({ theme }) => theme.colors.dangerSoft};
`;

export const IconBox = styled.div`
  width: 52px;
  height: 52px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: ${({ theme }) => theme.spacing.md};

  border-radius: ${({ theme }) => theme.radius.round};

  background: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.white};

  font-size: 24px;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};

  color: ${({ theme }) => theme.colors.text};
`;

export const Description = styled.p`
  margin-top: ${({ theme }) => theme.spacing.xs};

  max-width: 420px;

  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  color: ${({ theme }) => theme.colors.textSoft};
`;

export const Actions = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};

  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
`;
