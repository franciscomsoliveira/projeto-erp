import styled from "styled-components";

export const PageHeaderContainer = styled.section`
  margin-bottom: 24px;
  padding: 22px 24px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};

  background:
    linear-gradient(
      135deg,
      color-mix(
        in srgb,
        ${({ theme }) => theme.colors.primary} 12%,
        transparent
      ),
      transparent 42%
    ),
    ${({ theme }) => theme.colors.surface};

  box-shadow: 0 18px 40px ${({ theme }) => theme.colors.shadow};

  ${({ theme }) => theme.media.tablet} {
    padding: 18px;
    margin-bottom: 18px;
  }
`;

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  margin-bottom: 10px;

  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textMuted};

  span {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  strong {
    color: ${({ theme }) => theme.colors.border};
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 18px;

  ${({ theme }) => theme.media.tablet} {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const TitleGroup = styled.div`
  min-width: 0;

  h1 {
    font-family: ${({ theme }) => theme.font.heading};
    font-size: clamp(24px, 3vw, 34px);
    line-height: 1.05;
    font-weight: 900;
    letter-spacing: -0.8px;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    margin-top: 6px;
    max-width: 680px;

    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.font.size.md};
    line-height: 1.5;
  }
`;

export const MetaInfo = styled.div`
  margin-top: 14px;

  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.font.size.sm};
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;

  flex-wrap: wrap;

  ${({ theme }) => theme.media.tablet} {
    width: 100%;
    justify-content: flex-start;
  }
`;
