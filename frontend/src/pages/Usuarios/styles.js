import styled from "styled-components";

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  align-items: end;

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
  }
`;

export const TableWrap = styled.div`
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
  }

  th {
    text-align: left;
    padding: 10px 16px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textMuted};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    white-space: nowrap;
  }

  td {
    padding: 12px 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    white-space: nowrap;
  }

  tbody tr:hover {
    background: ${({ theme }) => theme.colors.surfaceStrong};
  }
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  padding: 3px 8px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;

  color: ${({ theme, $status }) =>
    $status === "ATIVO" ? theme.colors.success : theme.colors.error};

  background: ${({ theme }) => theme.colors.surfaceStrong};
`;
