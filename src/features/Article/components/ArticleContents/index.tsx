import { FC } from "react";
import articleDetail from "../../../../constants/article/articleDetail";
import createArticleElement from "../../../../utils/createArticleElement";

const ArticleContents: FC = () => {
  const articleContent = articleDetail.success.data;
  const articleElements = articleContent.map(value =>
    createArticleElement({ rawData: value })
  )

  return <>{articleElements}</>

}

export default ArticleContents;