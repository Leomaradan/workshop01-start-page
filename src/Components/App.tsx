import React, { useEffect } from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import { useDispatch } from 'react-redux';
import { LoadData } from '../Redux/action';
import Header from './Header/Header';
import GridItem from './LinkGrid/GridItem';
import LinkGrid from './LinkGrid/LinkGrid';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadData());
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      <LinkGrid />
    </div>
  );
}

export default App;
