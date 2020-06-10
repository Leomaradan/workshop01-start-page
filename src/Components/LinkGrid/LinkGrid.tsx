import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../Models/State';
import GridItem from './GridItem';
import styles from './LinkGrid.module.scss';

export interface LinkGridProps {

}

const LinkGrid: React.SFC<LinkGridProps> = () => {

  const links = useSelector((state: State) => state.links.links.sort((a, b) => a.order - b.order));

  return (
    <>
      <span>LinkGrid</span>
      <div className={styles.LinkGrid}>
        {links?.map(link => <GridItem key={link.url} link={link} />)}
      </div>
    </>
  );
};

export default LinkGrid;