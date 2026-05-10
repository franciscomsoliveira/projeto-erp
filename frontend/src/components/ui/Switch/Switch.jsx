import { Wrapper, Track, Thumb, LabelText } from "./styles";
export function Switch({ label, checked, disabled = false, ...props }) {return <Wrapper $disabled={disabled}><input type="checkbox" checked={checked} disabled={disabled} {...props}/><Track aria-hidden="true"><Thumb /></Track>{label && <LabelText>{label}</LabelText>}</Wrapper>}
