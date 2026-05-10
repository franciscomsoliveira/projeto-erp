import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;

  ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const HeaderActions = styled.div`
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

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.heading};
  font-size: ${({ theme }) => theme.font.size.xxl};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 800;
  letter-spacing: -0.03em;
`;

export const Description = styled.p`
  margin-top: 4px;
  max-width: 720px;
  font-size: ${({ theme }) => theme.font.size.md};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SectionHeader = styled.div`
  padding: 18px 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;

  ${({ theme }) => theme.media.mobile} {
    padding: 16px;
    flex-direction: column;
  }
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.size.lg};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 800;
`;

export const SectionDescription = styled.p`
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.font.size.sm};
  line-height: 1.5;
`;

export const Section = styled.div`
  padding: 20px;

  ${({ theme }) => theme.media.mobile} {
    padding: 16px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Footer = styled.footer`
  position: sticky;
  bottom: 0;
  z-index: 5;
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: 0 -8px 30px ${({ theme }) => theme.colors.shadow};

  ${({ theme }) => theme.media.mobile} {
    button {
      width: 100%;
    }
  }
`;
