import React from "react";

//components
import ElementWrapper from "../features/Article/components/Elements/ElementWrapper";
import ParagraphElement from "../features/Article/components/Elements/ParagraphElement";
import ImageElement from "../features/Article/components/Elements/ImageElement";
import CodeElement from "../features/Article/components/Elements/CodeElement";

//types
import { ArticleContentTypes } from "../types/article";


const types = {
  paragraph: "paragraph",
  heading1: "heading_1",
  heading2: "heading_2",
  heading3: "heading_3",
  heading4: "heading_4",
  image: "image",
  callout: "callout",
  code: "code",
};

function createArticleElement({ rawData }: { rawData: ArticleContentTypes }) {
  const { type } = rawData;

  switch (type) {
    case types.paragraph:
      return (
        <ElementWrapper tag="p">
          {rawData.paragraph?.rich_text.map((value, index) => (
            <ParagraphElement
              key={index}
              annotations={value.annotations}
              text={value.plain_text}
            />
          ))}
        </ElementWrapper>
      );
    case types.heading1:
      return (
        <ElementWrapper tag="h1">
          {rawData.heading_1?.rich_text.map((value, index) => value.plain_text)}
        </ElementWrapper>
      );
    case types.heading2:
      return (
        <ElementWrapper tag="h2">
          {rawData.heading_2?.rich_text.map((value, index) => value.plain_text)}
        </ElementWrapper>
      );
    case types.heading3:
      return (
        <ElementWrapper tag="h3">
          {rawData.heading_3?.rich_text.map((value, index) => value.plain_text)}
        </ElementWrapper>
      );
    case types.heading4:
      return (
        <ElementWrapper tag="h4">
          {rawData.heading_4?.rich_text.map((value, index) => value.plain_text)}
        </ElementWrapper>
      );
    case types.image:
      return (
        <ElementWrapper tag="figure">
          <ImageElement
            altText={rawData.image?.caption[0] || ''}
            fileUrl={rawData.image?.file.url || ''}
          />
        </ElementWrapper>
      );
    case types.callout:
      return (
        <ElementWrapper tag="aside">
          {rawData.callout?.rich_text.map((value, index) => (
            <ParagraphElement
              key={index}
              annotations={value.annotations}
              text={value.plain_text}
            />
          ))}
        </ElementWrapper>
      );
    case types.code:
      const codeArticle = rawData.code?.rich_text.map((value) =>
        value.plain_text.split("\n")
      );
      return (
        <ElementWrapper tag="div">
          <CodeElement codeArticle={codeArticle || []} />
        </ElementWrapper>
      );
    default:
      return null;
  }
}

export default createArticleElement;
