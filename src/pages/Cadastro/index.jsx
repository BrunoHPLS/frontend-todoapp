import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../service/userService';

// import { Container } from './styles';

function Cadastro() {
  const navigate = useNavigate();
  const [registered,setRegistered] = useState(false);
  const [message,setMessage] = useState('');
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
      if(registered){
          navigate('/validate',{replace: true});
      }
  },[registered]);

return (
  <>
      <h1>Cadastro</h1>
      <form onSubmit={async (event)=>{
          event.preventDefault();
          setLoading(true);

          let {nome,email,senha} = event.target;
          await register(email.value,nome.value,senha.value)
          .then(()=>{
            setRegistered(true);
          })
          .catch(({response:{data:{description}}})=>setMessage(description));
          setLoading(false);
      }}>
          <input type="text" id='nome' name='nome' placeholder='nome' required/>
          <input type="email" id='email' name='email' placeholder='email' required/>
          <input type="password" id='senha' name='senha' placeholder='senha' required/>
          <button type='submit' disabled={loading}>Entrar</button>
          {<span>{message}</span>}
          <br/>
          <Link to='/validate'>Ir para validação de token</Link>
          <br/>
          <Link to='/login'>Ir para login</Link>
      </form>
  </>
);
}

export default Cadastro;