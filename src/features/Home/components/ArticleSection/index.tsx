import { FC } from "react";
import * as S from './styled';
import { CONSTANTS } from "../../../../constants";
import { useNavigate, useParams } from "react-router-dom";
import { TabValue } from "../../../../types/home";

const ArticleSection: FC = () => {
  const params = useParams();
  const currentTab = params.tab || '' as TabValue;
  const navigate = useNavigate();
  const { HOME } = CONSTANTS;
  const { articles, articleTabs, currentValue } = HOME;

  let articleList = articles;
  if (currentTab) {
    articleList = articles.filter(value => value.category === currentValue[currentTab]);
  }

  const onSelectTab = (value: TabValue) => {
    navigate(`/${value}`)
  }

  return (
    <S._ArticleSection>
      <S._ArticleTabsLine>
        {
          articleTabs.map((tab, index) => <S._ArticleTab onClick={() => onSelectTab(tab.value)} isCurrent={currentTab === tab.value} key={index}>
            {tab.name}
          </S._ArticleTab>)
        }
      </S._ArticleTabsLine>
      <div>
        {
          articleList.map((value, index) => {
            const { title, subtitle, createdTime, editor, thumbnailConfig } = value;
            return (
              <li key={index}>
                <S._ArticleCard href={`/article/${value.key}`}>
                  <S._ArticleInformation>
                    <S._ArticleTitle className="title">{title}</S._ArticleTitle>
                    <S._ArticleDescription>{subtitle}</S._ArticleDescription>
                    <S._ArticleDate>{createdTime} · {editor.name}</S._ArticleDate>
                  </S._ArticleInformation>
                  <S._ArticleThumbnailCover>
                    <S._ArticleThumbnail className="thumbnail" src={thumbnailConfig.imageUrl} />
                  </S._ArticleThumbnailCover>
                </S._ArticleCard>
              </li>)
          })
        }
      </div>
    </S._ArticleSection>
  )
}

export default ArticleSection;