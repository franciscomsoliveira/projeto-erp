import styled from "styled-components";

export const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;

  ${({ theme }) => theme.media.desktop} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const KpiCard = styled.div`
  padding: 18px;

  display: flex;
  align-items: center;
  gap: 14px;

  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};

  background: ${({ theme }) => theme.colors.surface};
  box-shadow: 0 16px 36px ${({ theme }) => theme.colors.shadow};
`;

export const KpiIcon = styled.div`
  width: 46px;
  min-width: 46px;
  height: 46px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${({ theme }) => theme.radius.md};

  background: color-mix(
    in srgb,
    ${({ theme, $danger }) =>
        $danger ? theme.colors.error : theme.colors.primary}
      16%,
    transparent
  );

  color: ${({ theme, $danger }) =>
    $danger ? theme.colors.error : theme.colors.primary};

  svg {
    width: 22px;
    height: 22px;
  }
`;

export const KpiContent = styled.div`
  span {
    display: block;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.font.size.sm};
    font-weight: 700;
  }

  strong {
    display: block;
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.font.size.xl};
    font-weight: 900;
  }

  small {
    display: block;
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.font.size.xs};
  }
`;

export const ChartCard = styled.div`
  grid-column: span 2;

  padding: 22px;

  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};

  background: ${({ theme }) => theme.colors.surface};
  box-shadow: 0 16px 36px ${({ theme }) => theme.colors.shadow};

  h3 {
    margin-bottom: 22px;
    color: ${({ theme }) => theme.colors.text};
  }

  .fake-chart {
    height: 220px;

    display: flex;
    align-items: flex-end;
    gap: 12px;
  }

  .fake-chart span {
    flex: 1;
    border-radius: 999px 999px 8px 8px;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );
    opacity: 0.85;
  }

  ${({ theme }) => theme.media.tablet} {
    grid-column: span 1;
  }
`;

export const ListCard = styled.div`
  grid-column: span 2;

  padding: 22px;

  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};

  background: ${({ theme }) => theme.colors.surface};
  box-shadow: 0 16px 36px ${({ theme }) => theme.colors.shadow};

  h3 {
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.text};
  }

  ${({ theme }) => theme.media.tablet} {
    grid-column: span 1;
  }
`;

export const ListItem = styled.div`
  padding: 14px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: 0;
  }

  strong {
    display: block;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.font.size.sm};
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.font.size.xs};
  }
`;

export const StatusBadge = styled.small`
  padding: 4px 8px;

  border-radius: 999px;

  background: color-mix(
    in srgb,
    ${({ theme, $danger, $warning }) =>
        $danger
          ? theme.colors.error
          : $warning
            ? theme.colors.warning
            : theme.colors.success}
      16%,
    transparent
  );

  color: ${({ theme, $danger, $warning }) =>
    $danger
      ? theme.colors.error
      : $warning
        ? theme.colors.warning
        : theme.colors.success};

  font-weight: 800;
`;
