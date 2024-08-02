import { FC } from "react";
import styled from "@emotion/styled";

//assets
import BannerImageWEBP from '../../../../assets/tosstech_banner.webp';

const _ImageBanner = styled.div`
    background-color: #222845;
    display: flex;
    align-items: center;
    overflow: hidden;
    border-radius: 12px;
    margin: 24px auto 40px;
    max-width: 1050px;
    width: 100%;
    position: relative;
    cursor: default;
`;

const _Image = styled.img`
  width: 100%;
  height: 130px;
  opacity: 1;
  object-fit: contain;
  margin: 0 auto;
`;

const ImageBannerSection: FC = () => {
  return (
    <_ImageBanner>
      <_Image srcSet={BannerImageWEBP} />
    </_ImageBanner>
  )
}

export default ImageBannerSection