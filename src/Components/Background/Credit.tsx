import React from 'react';

export interface CreditProps {
  text: string;
  url: string;
}

const Credit = ({ text, url }: CreditProps) => (
  <a
    href={url}
    target='_blank'
    rel='noopener noreferrer'
  >
    {text}
  </a>
);

export default Credit;