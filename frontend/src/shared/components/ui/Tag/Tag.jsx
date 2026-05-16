import { StyledTag } from "./styles";
export function Tag({ children, variant = "default", size = "md", ...props }) {return <StyledTag $variant={variant} $size={size} {...props}>{children}</StyledTag>}
