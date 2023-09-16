import { Component, createSignal } from 'solid-js';

import styles from './App.module.css';
import GRecap from '../../package/src/grecaptcha'
const App: Component = () => {
  const [token,setToken] = createSignal("")
  return (
    <div class={styles.App}>
      <GRecap
       siteKey='2222'
      onError={() =>console.log("error")} 
      onExpire={() => console.log("validação expirada")} 
      onVerify={token => setToken(token)}/>

    </div>
  );
};

export default App;
