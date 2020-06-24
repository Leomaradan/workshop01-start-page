import React, { useState } from 'react';
import { useInterval } from 'beautiful-react-hooks';
import styles from './Header.module.scss';

const formatHour = (date: Date) => date.toTimeString().substring(0, 5);

const Header: React.SFC = () => {
  const [hour, setHour] = useState(formatHour(new Date()));

  useInterval(() => {
    const newHour = formatHour(new Date());
    if (newHour !== hour) {
      setHour(newHour);
    }
  }, 1000);

  return (
    <div className={styles.Header}>
      <h1>{hour}</h1>
    </div>
  );
};

export default Header;