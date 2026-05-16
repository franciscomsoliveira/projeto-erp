import styled from "styled-components";

export const Section = styled.section`
  width: 100%;

  padding: ${({ theme }) => theme.spacing.md};

  background: ${({ theme }) => theme.colors.surface};

  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: ${({ theme }) => theme.radius.lg};
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.sm};

  margin-bottom: ${({ theme }) => theme.spacing.md};

  ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const SectionText = styled.div`
  min-width: 0;
`;

export const SectionTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};

  font-size: ${({ theme }) => theme.typography.fontSize.lg};

  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};

  color: ${({ theme }) => theme.colors.text};
`;

export const SectionDescription = styled.p`
  margin-top: 4px;

  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  color: ${({ theme }) => theme.colors.textSoft};
`;

export const SectionContent = styled.div`
  min-width: 0;
`;
