import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';


function Home() {
  const {handleLogout} = useContext(AuthContext);

  return (
    <>
      <h1>Home</h1>
      <button onClick={handleLogout}>Deslogar</button>
    </>);
}

export default Home;