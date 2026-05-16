import styled from "styled-components";

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.md};
`;

export const SummaryItem = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4px;

  padding-bottom: ${({ theme }) => theme.spacing.sm};

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const SummaryLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  color: ${({ theme }) => theme.colors.textSoft};
`;

export const SummaryValue = styled.strong`
  font-size: ${({ theme }) => theme.typography.fontSize.md};

  color: ${({ theme }) => theme.colors.text};
`;
