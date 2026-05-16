import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.container.xl};

  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.lg};
`;
