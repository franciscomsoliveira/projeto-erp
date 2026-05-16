import styled from "styled-components";

export const Divider = styled.hr`
  border: none;

  height: 1px;

  background: ${({ theme }) => theme.colors.border};

  margin: ${({ theme }) => theme.spacing.lg} 0;
`;
