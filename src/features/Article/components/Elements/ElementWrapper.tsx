import React, { FC } from 'react';

type Tag = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'aside' | 'figure' | 'div'

interface ElementWrapperProps {
  tag: Tag;
  children: React.ReactNode;
}

const styledElements: Record<Tag, React.CSSProperties> = {
  p: {
    fontSize: '17px',
    letterSpacing: '0em',
    lineHeight: 1.6,
    fontWeight: 400,
    color: '#333d4b',
    margin: "24px 0px 8px"
  },
  h1: {
    fontSize: '48px',
    fontWeight: 700,
    lineHeight: 1.25,
    color: 'rgb(51, 61, 75)',
    wordBreak: 'keep-all',
    overflowWrap: 'break-word',
  },
  h2: {
    fontSize: '30px',
    letterSpacing: '0em',
    lineHeight: '1.55',
    fontWeight: 'bold',
    color: '#191f28',
    margin: '40px 0px 4px'
  },
  h3: {
    fontSize: "24px",
    letterSpacing: "0em",
    lineHeight: 1.6,
    fontWeight: "bold",
    color: "#191f28",
    margin: "24px 0px 4px"
  },
  h4: {
    fontSize: '19px',
    letterSpacing: '0em',
    lineHeight: 1.6,
    margin: '24px 0px 0px',
    fontWeight: 400,
    color: "#191f28",
    background: 'transparent'
  },
  figure: {
    margin: '24px 0px 8px',
    textAlign: 'center'
  },
  aside: {
    margin: '24px 0px 8px',
    padding: '40px 32px',
    borderRadius: '16px',
    background: '#f2f4f6'
  },
  div: {
  },
}

const ElementWrapper: FC<ElementWrapperProps> = ({ tag, children }) => {
  const Tag = tag;
  return <Tag style={styledElements[tag]}>{children}</Tag>;
};

export default ElementWrapper;