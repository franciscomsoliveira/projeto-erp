import { Wrapper, Circle, LabelText } from "./styles";
export function Radio({ label, checked, disabled = false, ...props }) {return <Wrapper $disabled={disabled}><input type="radio" checked={checked} disabled={disabled} {...props}/><Circle aria-hidden="true" />{label && <LabelText>{label}</LabelText>}</Wrapper>}
