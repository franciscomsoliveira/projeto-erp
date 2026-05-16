import styled from "styled-components";

export const ErrorBox = styled.div`
  padding: ${({ theme }) => theme.spacing.md};

  background: ${({ theme }) => theme.colors.dangerSoft};

  border: 1px solid ${({ theme }) => theme.colors.danger};

  border-radius: ${({ theme }) => theme.radius.md};

  color: ${({ theme }) => theme.colors.danger};

  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;
