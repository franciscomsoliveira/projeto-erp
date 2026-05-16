import styled from "styled-components";

export const HelperText = styled.span`
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.45;
`;
