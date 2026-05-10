import styled from "styled-components";

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: ${({ $align }) => $align};
  justify-content: ${({ $justify }) => $justify};
  gap: ${({ $gap }) => $gap};
  flex-wrap: ${({ $wrap }) => ($wrap ? "wrap" : "nowrap")};
`;
