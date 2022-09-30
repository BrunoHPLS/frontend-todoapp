import React, { useContext } from 'react';
import AuthBody from '../../components/AuthBody';
import Form from '../../components/Form';
import ButtonArea from '../../components/Form/ButtonArea';
import FormContainer from '../../components/FormContainer';
import Link from '../../components/Link';
import TextField from '../../components/TextField';
import { AuthContext } from '../../contexts/AuthContext';

function Login() {
    const {handleLogin} = useContext(AuthContext);

    return (
      <AuthBody>
        <FormContainer title={'Login'}>
          <Form 
            asyncRequestWithResponse={handleLogin}
          >
            <TextField 
            icon="mail" 
            type="email" 
            id='loginEmail' 
            name='loginEmail' 
            placeholder='Digite seu email'
            required 
            />
            <TextField 
            icon="password" 
            type="password" 
            id='senha' 
            name='senha' 
            placeholder='Digite sua senha' 
            required 
            />
            <ButtonArea value="Entrar" resetValue={"Limpar"}/>
            <Link to='/cadastro'>Não possui cadastro?</Link>
            <Link to='/nova-senha'>Esqueceu sua senha?</Link>
            <Link to='/reativar-conta'>Reativar Conta?</Link>
          </Form>
        </FormContainer>
      </AuthBody>
    );
}

export default Login;