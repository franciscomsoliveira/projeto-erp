import styled from "styled-components";

export const Field = styled.div`
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
