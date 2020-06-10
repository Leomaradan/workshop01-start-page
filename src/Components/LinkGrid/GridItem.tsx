import React from 'react';
import { Link } from '../../Models/Link';
import styles from './GridItem.module.scss';

export interface GridItemProps {
  link: Link;
}

const GridItem: React.SFC<GridItemProps> = ({ link }: GridItemProps) => {
  return (
    <div className={styles.GridItem}>
      <div className={styles.Container}>
        <div className={styles.Card}>
          <div className={styles.Front}>
            <img src={link.imageUrl} alt="thumbnail" />
          </div>
          <div className={styles.Back}>
            <h1>{link.title}</h1>
            <p>{link.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
