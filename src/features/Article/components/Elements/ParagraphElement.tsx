import React, { FC } from 'react';
import styled from '@emotion/styled';

//types
import { AnnotationTypes } from '../../../../types/article';

interface ParagraphElementProps {
  annotations: AnnotationTypes;
  text: string;
}

const _Paragraph = styled.p<{ bold?: boolean }>`
  display: inline;
  font-weight: ${(props) => props.bold ? 'bold' : "400"};
  font-size: 17px;
  line-height: 1.6;
  color: #333d4b;
`;

const ParagraphElement: FC<ParagraphElementProps> = ({ annotations, text }) => {
  return annotations.bold
    ? <_Paragraph bold>{text}</_Paragraph>
    : <_Paragraph>{text}</_Paragraph>;
};

export default ParagraphElement;
