import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { validate } from '../../service/userService';


function ValidaToken() {
  const [message,setMessage] = useState('');

return (
  <>
      <h1>Validar Token</h1>
      <form onSubmit={async (event)=>{
              event.preventDefault();
              let {token} = event.target;
              await validate(token.value)
              .then(({data})=>setMessage(data))
              .catch(({response:{data:{description}}})=>setMessage(description));
          }}>
              <h3>{message}</h3>
              <input type="text" id='token' name='token' placeholder='token' required/>
              <button type='submit'>Validar</button>
              <br/>
              <Link to='/cadastro'>Voltar ao cadastro</Link>
              <br/>
              <Link to='/login'>Ir para login</Link>
      </form>
  </>
);
}

export default ValidaToken;