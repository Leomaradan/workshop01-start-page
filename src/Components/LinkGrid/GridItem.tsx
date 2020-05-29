import React from 'react';
import { Link } from '../../Models/Link';
import styles from './GridItem.module.scss';

export interface GridItemProps {
  link: Link;
}

const GridItem: React.SFC<GridItemProps> = ({ link }: GridItemProps) => {
  return (
    <div className={styles.GridItem}>
      <ul>
        <li>
          URL:
          {link.url}
        </li>
        <li>
          Title:
          {link.title}
        </li>
        <li>
          Description:
          {link.description ?? '(no description)'}
        </li>
        <li>
          Order:
          {link.order}
        </li>
        <li>
          Image:
          {link.imageUrl}
        </li>
      </ul>
    </div>
  );
};

export default GridItem;
