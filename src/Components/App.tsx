import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './App.module.scss';
import { LoadData } from '../Redux/action';
import Header from './Header/Header';
import LinkGrid from './LinkGrid/LinkGrid';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadData());
  }, [dispatch]);

  return (
    <div className={styles.App}>
      <Header />
      <LinkGrid />
    </div>
  );
}

export default App;
