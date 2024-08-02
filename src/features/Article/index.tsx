import { FC } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";

//utils
import getArticleByKey from "../../utils/getArticleByKey";

//components
import ArticleHeader from "./components/ArticleHeader";
import ArticleContents from "./components/ArticleContents";

const _ArticleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center; 
`;

const _Article = styled.article`
  width: 700px;
  margin: 0 auto;
`;

const ArticlePage: FC = () => {
  const params = useParams();
  const key = params['key'] as string;
  const articleData = getArticleByKey(key)


  if (!articleData) return <div>글이 유효하지 않습니다</div>

  const { updatedTime, editor, coverConfig, title, seoConfig } = articleData;

  return (
    <_ArticleSection>
      <_Article>
        <ArticleHeader bannerUrl={coverConfig.imageUrl || ''} title={title || ''} tags={seoConfig.tags || []}
          editor={{ name: editor.name, shortDescription: editor.shortDescription || '' }}
          updatedTime={updatedTime}
        />
        <ArticleContents />
      </_Article>
    </_ArticleSection>
  )
}

export default ArticlePage;