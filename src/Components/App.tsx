import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './App.module.scss';
import { LoadData, LoadBackgroundImage } from '../Redux/action';
import Header from './Header/Header';
import LinkGrid from './LinkGrid/LinkGrid';
import Background from './Background/Background';
import { useService } from '../Services/ServicesContext';

function App() {
  const dispatch = useDispatch();
  const service = useService();

  useEffect(() => {
    dispatch(LoadData(service));
    dispatch(LoadBackgroundImage(service));
  }, [dispatch, service]);

  return (
    <div className={styles.App}>
      <Background className={styles.Container}>
        <Header />
        <LinkGrid />
      </Background>
    </div>
  );
}

export default App;
