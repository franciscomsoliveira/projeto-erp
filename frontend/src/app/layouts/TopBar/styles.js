import styled from "styled-components";

export const TopBarContainer = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: ${({ theme }) => theme.layout.sidebarCollapsed};

  height: ${({ theme }) => theme.layout.topbarHeight};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px;

  background: ${({ theme }) => theme.colors.backgroundSoft};

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  z-index: ${({ theme }) => theme.zIndex.topbar};

  transition: left ${({ theme }) => theme.transitions.normal};

  @media (max-width: 768px) {
    left: 0;
  }
`;

export const LeftArea = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};

  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};

  color: ${({ theme }) => theme.colors.text};
`;

export const RightArea = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;
`;

export const IconButton = styled.button`
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};

  background: ${({ theme }) => theme.colors.surface};

  color: ${({ theme }) => theme.colors.text};

  cursor: pointer;

  transition:
    background ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
`;

export const UserAvatar = styled.div`
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${({ theme }) => theme.radius.round};

  background: ${({ theme }) => theme.colors.primary};

  color: #fff;

  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }

  span {
    font-size: ${({ theme }) => theme.typography.fontSize.xs};

    color: ${({ theme }) => theme.colors.textSoft};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
