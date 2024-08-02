import { FC } from "react";

//assets
import NavbarLogoPNG from '../../../assets/icon.png';

//components
import * as S from "./styled";
import { NAVBAR_MENU } from "../../../constants/navbar";

export type tabType = "button"
export type colorType = "primary" | "default"

export interface NavbarProps {
  tabs: { type: tabType, color: colorType, text: string }[]
}

export const Navbar: FC = () => {
  return (
    <S._Nav>
      <S._NavbarInnerContents>
        <S._LogoContainer href="/">
          <S._Logo src={NavbarLogoPNG} />
        </S._LogoContainer>
        <S._Tabs>
          {
            NAVBAR_MENU.map((tab, index) => {
              return (
                <S._Tab key={index} color={tab.color}>{tab.text}</S._Tab>
              )
            })
          }
        </S._Tabs>
      </S._NavbarInnerContents>
    </S._Nav>
  )
}