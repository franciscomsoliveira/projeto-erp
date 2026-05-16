import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  gap: ${({ theme, $gap }) => theme.spacing[$gap] || theme.spacing.md};

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: repeat(
      ${({ $columns }) => $columns},
      minmax(0, 1fr)
    );
  }
`;
