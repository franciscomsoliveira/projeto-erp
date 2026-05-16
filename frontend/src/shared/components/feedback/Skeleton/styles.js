import styled from "styled-components";

import { pulse } from "@/core/styles";

export const SkeletonBox = styled.div`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};

  border-radius: ${({ theme, $radius }) =>
    theme.radius[$radius] || theme.radius.md};

  background: ${({ theme }) => theme.colors.surfaceStrong};

  animation: ${pulse} 1.2s ease-in-out infinite;
`;
