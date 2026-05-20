import styled from "styled-components";

export const Container = styled.div`
  min-height: 320px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  gap: 20px;

  padding: 40px;
`;

export const IconWrapper = styled.div`
  width: 72px;
  height: 72px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 24px;

  background: ${({ theme }) => theme.colors.primarySoft};

  color: ${({ theme }) => theme.colors.primary};

  font-size: 32px;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};

  font-weight: 700;

  color: ${({ theme }) => theme.colors.text};
`;

export const Description = styled.p`
  max-width: 520px;

  line-height: 1.6;

  color: ${({ theme }) => theme.colors.textMuted};
`;
