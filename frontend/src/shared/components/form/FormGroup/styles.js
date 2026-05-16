import styled from "styled-components";

export const Group = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.md};
`;

export const GroupTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.md};

  color: ${({ theme }) => theme.colors.text};
`;

export const GroupContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.md};
`;
