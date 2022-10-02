import React, { useContext } from 'react';
import AuthBody from '../../components/AuthBody';
import Form from '../../components/Form';
import ButtonArea from '../../components/Form/ButtonArea';
import FormContainer from '../../components/FormContainer';
import Link from '../../components/Link';
import { AuthContext } from '../../contexts/AuthContext';

function Login() {
    const textFields = [
      {
        icon: "mail",
        type: "email",
        id:"loginEmail",
        name:"loginEmail",
        placeholder:"Digite seu email",
        required: true
      },
      {
        icon:"password" ,
        type:"password" ,
        id:'senha' ,
        name:'senha', 
        placeholder:'Digite sua senha', 
        required: true
      }
    ];

    const {handleLogin} = useContext(AuthContext);

    return (
      <AuthBody>
        <FormContainer title={'Login'}>
          <Form 
            fields = {textFields}
            asyncRequestWithResponse={handleLogin}
          >
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