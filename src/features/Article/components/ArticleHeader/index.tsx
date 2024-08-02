import { FC } from "react";

import * as S from './styled';

interface ArticleHeaderProps {
  bannerUrl: string;
  title: string;
  tags: {
    id: number;
    content: string;
    wordType: string;
  }[];
  editor?: {
    name: string,
    shortDescription: string;
  }
  updatedTime: string;
}

const ArticleHeader: FC<ArticleHeaderProps> = ({ bannerUrl, title, tags, editor, updatedTime }) => {
  return (
    <S._ArticleHeader>
      <S._ArticleBannerImage src={bannerUrl} alt="아티클 배너" />
      <S._ArticleTitle>{title}</S._ArticleTitle>
      <S._ArticleTags>
        {tags.map((value, index) => <S._ArticleTag key={index}>{value.content}</S._ArticleTag>)}
      </S._ArticleTags>
      <S._ArticleEditInformation>
        <S._ArticleEditor>
          {editor?.name} · {editor?.shortDescription}
        </S._ArticleEditor>
        <S._ArticleUpdatedTime>
          {updatedTime}
        </S._ArticleUpdatedTime>
      </S._ArticleEditInformation>
    </S._ArticleHeader>
  )
}

export default ArticleHeader;