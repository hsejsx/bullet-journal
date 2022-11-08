import logo from './logo.svg';
import styles from './App.module.css';
import Daily from './components/daily/Daily';
import { useState } from 'react';

function App() {
  const [env, setEnv] = useState(false);
  const handleEnv = () => {
    setEnv(!env);
  }
  return (
    <div className={`${styles.app} ${env && styles.dark}`}>
      <Daily env={env} handleEnv={handleEnv}></Daily>
    </div>
  );
}

export default App;
