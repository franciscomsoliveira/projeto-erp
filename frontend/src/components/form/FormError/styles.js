import styled from "styled-components";

export const ErrorText = styled.span`
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.colors.error};
  font-weight: 700;
  line-height: 1.45;
`;
