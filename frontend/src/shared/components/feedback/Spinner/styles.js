import styled from "styled-components";

import { spin } from "@/core/styles";

const sizes = {
  sm: "16px",
  md: "24px",
  lg: "36px",
};

export const SpinnerIcon = styled.span`
  width: ${({ $size }) => sizes[$size] || sizes.md};
  height: ${({ $size }) => sizes[$size] || sizes.md};

  display: inline-block;

  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: ${({ theme }) => theme.radius.round};

  animation: ${spin} 0.75s linear infinite;
`;
