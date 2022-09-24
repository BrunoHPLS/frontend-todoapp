import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

function Login() {
    const {handleLogin} = useContext(AuthContext);

    return (
      <div>
          <form onSubmit={ (event)=>{
              event.preventDefault();
              let {email,senha} = event.target;
              handleLogin({loginEmail: email.value,senha: senha.value});
          }}>
              <h1>Login</h1>
              <input type="email" id='email' name='email' placeholder='email' required/>
              <input type="password" id='senha' name='senha' placeholder='senha' required/>
              <button type='submit'>Entrar</button>
              <br/>
              <Link to='/cadastro'>Não possui cadastro?</Link>
              <br/>
              <Link to='/nova-senha'>Esqueceu sua senha?</Link>
              <br/>
              <Link to='/reativar-conta'>Reativar Conta?</Link>
          </form>
      </div>
    );
}

export default Login;