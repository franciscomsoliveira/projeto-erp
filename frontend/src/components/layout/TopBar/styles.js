import styled from "styled-components";

export const TopBarContainer = styled.div`
  height: ${({ theme }) => theme.layout.topbarHeight};
  padding: 0 20px;

  display: flex;
  align-items: center;
  gap: 18px;

  color: ${({ theme }) => theme.colors.text};

  ${({ theme }) => theme.media.tablet} {
    padding: 0 12px;
    gap: 10px;
  }
`;

export const LeftArea = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  min-width: 320px;

  ${({ theme }) => theme.media.tablet} {
    min-width: 0;
    flex: 1;
    gap: 8px;
  }
`;

export const MobileMenuButton = styled.button`
  width: 38px;
  height: 38px;

  display: none;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};

  background: ${({ theme }) => theme.colors.surfaceStrong};
  color: ${({ theme }) => theme.colors.textMuted};

  transition:
    background ${({ theme }) => theme.animation.hover},
    color ${({ theme }) => theme.animation.hover},
    border-color ${({ theme }) => theme.animation.hover};

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  ${({ theme }) => theme.media.tablet} {
    display: inline-flex;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  strong {
    font-family: ${({ theme }) => theme.font.heading};
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: 900;
    color: ${({ theme }) => theme.colors.text};
    white-space: nowrap;
  }

  .brand-icon {
    width: 34px;
    height: 34px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    border-radius: ${({ theme }) => theme.radius.md};

    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );

    box-shadow: 0 10px 24px
      color-mix(
        in srgb,
        ${({ theme }) => theme.colors.primary} 35%,
        transparent
      );
  }

  ${({ theme }) => theme.media.mobile} {
    strong {
      display: none;
    }
  }
`;

export const StoreInfo = styled.div`
  min-width: 0;
  height: 34px;

  padding: 0 12px;

  display: inline-flex;
  align-items: center;
  gap: 8px;

  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};

  background: ${({ theme }) => theme.colors.surfaceStrong};
  color: ${({ theme }) => theme.colors.textMuted};

  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: 800;

  span {
    max-width: 160px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  ${({ theme }) => theme.media.tablet} {
    max-width: 135px;
    height: 32px;
    padding: 0 9px;

    span {
      max-width: 90px;
    }
  }

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

export const SearchBox = styled.div`
  flex: 1;
  max-width: 520px;
  height: 38px;

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 0 12px;

  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};

  background: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.textMuted};

  transition:
    border-color ${({ theme }) => theme.animation.hover},
    box-shadow ${({ theme }) => theme.animation.hover};

  input {
    flex: 1;
    min-width: 0;
    border: 0;
    outline: 0;
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
  }

  input::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  kbd {
    padding: 2px 6px;
    border-radius: ${({ theme }) => theme.radius.xs};
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.surfaceStrong};
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.font.size.xs};
    font-weight: 800;
  }

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px
      color-mix(
        in srgb,
        ${({ theme }) => theme.colors.primary} 18%,
        transparent
      );
  }

  ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;

export const Actions = styled.div`
  margin-left: auto;

  display: flex;
  align-items: center;
  gap: 10px;

  ${({ theme }) => theme.media.tablet} {
    gap: 6px;
  }
`;

export const IconButton = styled.button`
  position: relative;

  width: 38px;
  height: 38px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};

  background: ${({ theme }) => theme.colors.surfaceStrong};
  color: ${({ theme }) => theme.colors.textMuted};

  transition:
    background ${({ theme }) => theme.animation.hover},
    color ${({ theme }) => theme.animation.hover},
    border-color ${({ theme }) => theme.animation.hover},
    transform ${({ theme }) => theme.animation.hover};

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-1px);
  }

  &.desktop-only {
    ${({ theme }) => theme.media.tablet} {
      display: none;
    }
  }

  ${({ theme }) => theme.media.tablet} {
    width: 36px;
    height: 36px;
  }
`;

export const NotificationDot = styled.span`
  position: absolute;
  top: 7px;
  right: 8px;

  width: 8px;
  height: 8px;

  border-radius: 50%;
  background: ${({ theme }) => theme.colors.error};

  box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.surfaceStrong};
`;

export const UserWrapper = styled.div`
  position: relative;
`;

export const UserTooltip = styled.div`
  position: absolute;

  top: calc(100% + 12px);
  right: 0;

  width: 260px;
  padding: 14px;

  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};

  background: color-mix(
    in srgb,
    ${({ theme }) => theme.colors.surface} 92%,
    transparent
  );

  backdrop-filter: blur(18px) saturate(180%);
  box-shadow: 0 24px 50px ${({ theme }) => theme.colors.shadow};

  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};

  transform: ${({ $open }) =>
    $open ? "translateY(0) scale(1)" : "translateY(-8px) scale(.98)"};

  transform-origin: top right;

  transition:
    opacity
      ${({ $open, theme }) =>
        $open ? theme.animation.enter : theme.animation.leave},
    transform
      ${({ $open, theme }) =>
        $open ? theme.animation.enter : theme.animation.leave},
    visibility
      ${({ $open, theme }) =>
        $open ? theme.animation.enter : theme.animation.leave};

  z-index: 999;
`;

export const UserButton = styled.button`
  height: 40px;
  padding: 0 8px 0 6px;

  display: inline-flex;
  align-items: center;
  gap: 9px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};

  background: ${({ theme }) => theme.colors.surfaceStrong};
  color: ${({ theme }) => theme.colors.text};

  transition:
    border-color ${({ theme }) => theme.animation.hover},
    background ${({ theme }) => theme.animation.hover};

  .chevron {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  ${({ theme }) => theme.media.tablet} {
    width: 38px;
    height: 38px;
    padding: 0;
    border-radius: ${({ theme }) => theme.radius.md};

    .chevron {
      display: none;
    }
  }
`;

export const UserAvatar = styled.div`
  width: 30px;
  min-width: 30px;
  height: 30px;

  border-radius: 50%;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.accent}
  );

  color: #fff;
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: 900;
`;

export const UserInfo = styled.div`
  strong,
  span,
  small {
    display: block;
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.font.size.md};
    font-weight: 800;
  }

  span {
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.font.size.sm};
  }

  small {
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.font.size.xs};
  }
`;

export const TooltipDivider = styled.div`
  height: 1px;
  margin: 14px 0;
  background: ${({ theme }) => theme.colors.border};
`;

export const TooltipItem = styled.button`
  width: 100%;
  height: 42px;

  display: flex;
  align-items: center;
  gap: 12px;

  padding: 0 12px;

  border: 0;
  border-radius: ${({ theme }) => theme.radius.md};

  background: transparent;
  color: ${({ theme }) => theme.colors.textMuted};

  transition:
    background ${({ theme }) => theme.animation.hover},
    color ${({ theme }) => theme.animation.hover};

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceStrong};
    color: ${({ theme }) => theme.colors.text};
  }
`;
