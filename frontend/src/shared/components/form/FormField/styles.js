import styled from "styled-components";

export const Field = styled.div`
  min-width: 0;

  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.xs};
`;
