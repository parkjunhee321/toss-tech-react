import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const _ArticleSection = styled.section`
  width: 700px;
  max-width: 700px;
  margin-bottom: 60px;
  padding: 0px 24px;
  min-height: 47px;
  margin: 0 auto 60px;

  list-style-type: none;
`;

export const _ArticleTabsLine = styled.ul`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  border-bottom: 1px solid #f2f4f6;
  border-bottom-color: var(--grey100);
  padding-bottom: 2px;
  list-style-type: none;
  padding-inline-start: 0;
`;

const isCurrentTabStyle = css`
  color: var(--grey800);
  font-weight: 600;
  border-bottom: 2px solid var(--grey900);
`;

const isNotCurrentTabStyle = css`
  transition: font-weight 0.2s ease, color 0.2s ease;
  color: var(--grey600);

  :hover {
    font-weight: 600;
  }
`;
export const _ArticleTab = styled.li<{ isCurrent: boolean }>`
  padding: 10px 20px;
  cursor: pointer;
  font-size: 17px;
  ${(props) => (props.isCurrent ? isCurrentTabStyle : isNotCurrentTabStyle)}
`;

export const _ArticleCard = styled.a`
  display: flex;
  width: 100%;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 24px 0px;
  :hover .title {
    color: #3182f6;
  }
  :hover .thumbnail {
    transform: scale(1.2);
  }
`;

export const _ArticleInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding-right: 20px;
`;

export const _ArticleTitle = styled.span`
  margin-top: 0;
  margin-bottom: 6px;
  overflow: hidden;
  font-weight: 600;
  color: #191f28;
  font-size: 20px;
  text-overflow: ellipsis;
  word-break: keep-all;
  overflow-wrap: break-word;
`;
export const _ArticleDescription = styled.span`
  margin: 0;
  color: #4e5968;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 17px;
`;
export const _ArticleDate = styled.span`
  color: #4e5968;
  font-size: 13px;
  font-weight: 400;
`;
export const _ArticleThumbnailCover = styled.div`
  position: relative;
  width: 130px;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const _ArticleThumbnail = styled.img`
  width: 130px;
  height: 90px;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1);
  transition: all 0.3s ease;
`;
