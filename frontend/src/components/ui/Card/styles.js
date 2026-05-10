import styled,{css}from"styled-components";
export const Container=styled.div`width:100%;padding:0;margin:14px 0;background:${({theme})=>theme.colors.surface};border:1px solid ${({theme})=>theme.colors.border};border-radius:${({theme})=>theme.radius.md};box-shadow:0 4px 20px ${({theme})=>theme.colors.shadow};overflow:hidden;transition:transform .2s ease,border-color .2s ease;${({$clickable})=>$clickable&&css`cursor:pointer;&:hover{transform:translateY(-2px);border-color:${({theme})=>theme.colors.primary};}`}`;
export const Header=styled.div`padding:16px 20px;border-bottom:1px solid ${({theme})=>theme.colors.border};display:flex;align-items:center;justify-content:space-between;gap:12px;`;
export const Title=styled.h3`font-size:${({theme})=>theme.font.size.md};color:${({theme})=>theme.colors.text};font-weight:800;`;
export const Content=styled.div`padding:20px;${({theme})=>theme.media.mobile}{padding:16px;}`;
export const Footer=styled.div`padding:14px 20px;border-top:1px solid ${({theme})=>theme.colors.border};display:flex;justify-content:flex-end;gap:8px;flex-wrap:wrap;`;
