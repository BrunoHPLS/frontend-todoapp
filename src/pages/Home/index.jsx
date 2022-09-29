import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import ThemeSwitcher from '../../components/ThemeSwitcher';


function Home() {
  const {handleLogout} = useContext(AuthContext);

  return (
    <>
      <ThemeSwitcher/>
      <h1>Home</h1>
      <button onClick={handleLogout}>Deslogar</button>
    </>);
}

export default Home;