import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { alteraSenha, newToken } from '../../service/userService';

function AlteraSenha() {
    const [message1,setMessage1] = useState('');
    const [message2,setMessage2] = useState('');

  return (
    <>
      <h1>Alterar Senha</h1>
      <h4>Digite seu email abaixo para o token ser enviado.<br/> Após recebê-lo, digite a senha desejada e o token.<br/> Sua senha será alterada</h4>
      <form onSubmit={async (event)=>{
              event.preventDefault();
              let {email} = event.target;
              await newToken(email.value)
              .then(({data})=>setMessage1(data))
              .catch(({response:{data:{description}}})=>setMessage1(description));
          }}>
              <h2>Email para o token</h2>
              <input type="email" id='email' name='email' placeholder='email' required/>
              <button type='submit'>Enviar Token</button>
              <h3>{message1}</h3>
      </form>
      <form onSubmit={async (event)=>{
              event.preventDefault();
              let {senha,token} = event.target;
              await alteraSenha(senha.value,token.value)
              .then(({data})=>setMessage2(data))
              .catch(({response:{data:{description}}})=>setMessage2(description));
          }}>
              <h2>Senha a ser alterada</h2>
              <input type="password" id='senha' name='senha' placeholder='Nova senha' required/>
              <input type="text" id='token' name='token' placeholder='Seu token' required/>
              <button type='submit'>Alterar senha</button>
              <h3>{message2}</h3>
      </form>
      <br/>
      <Link to='/login'>Ir para login</Link>
  </>
  );
}

export default AlteraSenha;