import styled from "styled-components";

export const Actions = styled.div`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.spacing.sm};

  flex-wrap: wrap;
`;
