import styled from "@emotion/styled";
import { colorType } from ".";
import { css } from "@emotion/react";

export const _Nav = styled.nav`
  width: 100%;
  height: 60px;

  border-bottom: 1px solid var(--greyOpacity200);
`;

export const _NavbarInnerContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 92%;
  height: 100%;

  margin: 0 auto;
`;

//logo
export const _LogoContainer = styled.a`
  text-decoration: none;
  width: auto;
  height: auto;
`;

export const _Logo = styled.img`
  width: 110px;
  height: 20px;
  object-fit: cover;
`;

export const _Tabs = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 8px;
`;

const defaultStyle = css`
  color: var(--grey700);
  background: var(--btn-bg-base);
  :hover {
    background: var(--grey300);
  }
`;

const primaryStyle = css`
  color: var(--blue700);
  background: var(--blue50);
  :hover {
    background: var(--blue100);
  }
`;

export const _Tab = styled.li<{ color: colorType }>`
  ${(props) => props.color === "default" && defaultStyle}
  ${(props) => props.color === "primary" && primaryStyle}

  cursor: pointer;
  border-radius: var(--btn-border-radius);
  font-size: 14px;
  font-weight: 500;
  padding: 7px 12px;

  transition: background 0.2s ease;
`;
