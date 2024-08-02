import React, { FC } from 'react';
import styled from '@emotion/styled';

interface CodeElementProps {
  codeArticle: string[][];
}

const _CodeWrapper = styled.div`
  border: 1px solid var(--sp-colors-surface2);
  border-radius: var(--sp-border-radius);
  padding: 16px;
`;

const _CodeLine = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const _IndexText = styled.p`
  font-size: 8px;
  color: var(--sp-colors-disabled);
`;

const _CodeText = styled.p`
  font-size: 13px;
  color: var(--sp-syntax-color-plain);
  margin: 0;
  white-space: pre-wrap;
`;

const CodeElement: FC<CodeElementProps> = ({ codeArticle }) => {
  const indexElement = (index: number) => <_IndexText>{index + 1}</_IndexText>;
  const codeElement = (code: string) => <_CodeText>{code}</_CodeText>;

  const elements = codeArticle.flatMap((value, valueIndex) =>
    value.map((code, index) => {
      const indexLine = indexElement(index);
      const codeLine = codeElement(code);
      return (
        <_CodeLine key={`${valueIndex}-${index}`}>
          {indexLine}
          {codeLine}
        </_CodeLine>
      );
    })
  );

  return <_CodeWrapper>{elements}</_CodeWrapper>;
};

export default CodeElement;
