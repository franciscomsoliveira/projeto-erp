import { Wrapper, Box, LabelText } from "./styles";
export function Checkbox({ label, checked, disabled = false, ...props }) {return <Wrapper $disabled={disabled}><input type="checkbox" checked={checked} disabled={disabled} {...props}/><Box aria-hidden="true" />{label && <LabelText>{label}</LabelText>}</Wrapper>}
