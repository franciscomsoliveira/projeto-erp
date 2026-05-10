import styled from "styled-components";

export const Label = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
`;

export const RequiredMark = styled.span`
  color: ${({ theme }) => theme.colors.error};
`;
