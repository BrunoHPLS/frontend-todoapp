import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { reactive } from '../../service/userService';

// import { Container } from './styles';

function ReativarConta() {
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
      <h1>Reativar usuário</h1>
      <h4>
        Semelhante ao cadastro, um token será enviado para o seu email e você será redirecionado para a tela de validação de tokens para reativar seu usuário.<br/>
        Aqui será possível reativar ele com um novo nome e senha.  
      </h4>
      <form onSubmit={async (event)=>{
          event.preventDefault();
          setLoading(true);

          let {nome,email,senha} = event.target;
          await reactive(email.value,nome.value,senha.value)
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

export default ReativarConta;