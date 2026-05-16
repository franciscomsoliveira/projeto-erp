import { SkeletonBox } from "./styles";

export function Skeleton({ width = "100%", height = "16px", radius = "md" }) {
  return <SkeletonBox $width={width} $height={height} $radius={radius} />;
}
