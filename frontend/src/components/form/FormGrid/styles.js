import styled from "styled-components";

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(
    ${({ $columns }) => $columns},
    minmax(min(100%, ${({ $minWidth }) => $minWidth}), 1fr)
  );
  gap: ${({ $gap }) => $gap};

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1fr;
  }
`;
