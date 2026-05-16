import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.md};

  ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
    align-items: flex-end;
  }
`;
