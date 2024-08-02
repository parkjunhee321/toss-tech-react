import styled from "@emotion/styled";

export const _ArticleHeader = styled.header`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const _ArticleBannerImage = styled.img`
  width: 100%;
  border-radius: 12px;
`;

export const _ArticleTitle = styled.h1`
  margin: 0;
  font-size: 48px;
  line-height: 1.25;
  color: rgb(51, 61, 75);
  word-break: keep-all;
  overflow-wrap: break-word;
  font-weight: 700;
`;

export const _ArticleTags = styled.div`
  display: flex;

  margin: 0px 8px 10px 0px;
  gap: 8px;
`;

export const _ArticleTag = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 6px 14px;
  border: 1px solid transparent;
  border-radius: 19px;
  background-color: #f2f4f6;
  color: #4e5968;

  font-size: 13px;
  font-weight: 400;
`;

export const _ArticleEditor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 8px;
  font-size: 17px;
  margin-bottom: 2px;
`;

export const _ArticleUpdatedTime = styled.span`
  font-size: 14px;
  line-height: 1.5;
  color: rgb(139, 149, 161);
`;

export const _ArticleEditInformation = styled.div`
  display: block;
`;
