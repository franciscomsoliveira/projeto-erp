import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${({ theme }) => theme.layout.topbarHeight};
  z-index: 1200;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px;
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const LeftArea = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const MenuButton = styled.button`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: inline-flex;
  }

  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

export const Brand = styled.strong`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
`;

export const StoreInfo = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const IconButton = styled.button`
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.md};
  background: transparent;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 20px;
  cursor: pointer;

  display: grid;
  place-items: center;

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundSoft};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 999px;

  display: grid;
  place-items: center;

  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-weight: 700;
`;
