import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;

  margin-bottom: 10px;
`;

export const Item = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Separator = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textMuted};

  svg {
    font-size: 12px;
  }
`;

export const CurrentItem = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.textSoft};
`;
