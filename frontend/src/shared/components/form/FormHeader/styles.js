import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.md};

  margin-bottom: ${({ theme }) => theme.spacing.lg};

  ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const Text = styled.div`
  min-width: 0;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};

  font-size: ${({ theme }) => theme.typography.fontSize.xl};

  color: ${({ theme }) => theme.colors.text};
`;

export const Description = styled.p`
  margin-top: 6px;

  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  color: ${({ theme }) => theme.colors.textSoft};
`;

export const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
`;
