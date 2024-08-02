import { FC } from "react";
import styled from "@emotion/styled";

//components
import ImageBannerSection from "./components/ImageBannerSection";
import ArticleSection from "./components/ArticleSection";

const _HomePageSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 24px;
`;

const HomePage: FC = () => {
  return (
    <_HomePageSection>
      <ImageBannerSection />
      <ArticleSection />
    </_HomePageSection>
  )
}

export default HomePage;