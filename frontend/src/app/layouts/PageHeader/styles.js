import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 24px;
`;

export const Breadcrumb = styled.div`
  margin-bottom: 8px;

  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  color: ${({ theme }) => theme.colors.textSoft};
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;

  gap: 6px;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};

  font-size: ${({ theme }) => theme.typography.fontSize.xl};

  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};

  color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};

  color: ${({ theme }) => theme.colors.textSoft};
`;

export const Meta = styled.div`
  margin-top: 4px;

  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  color: ${({ theme }) => theme.colors.textSoft};
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;

  flex-wrap: wrap;
`;
