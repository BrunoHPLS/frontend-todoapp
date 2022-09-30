import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthBody from '../../components/AuthBody';
import Form from '../../components/Form';
import ButtonArea from '../../components/Form/ButtonArea';
import FormContainer from '../../components/FormContainer';
import Link from '../../components/Link';
import TextField from '../../components/TextField';
import { register } from '../../service/userService';

function Cadastro() {
  const navigate = useNavigate();
  const [registered,setRegistered] = useState(false);

  useEffect(()=>{
      if(registered){
          navigate('/validate',{replace: true});
      }
  },[registered]);

  const validateRegister = {
    201: (response)=>{setRegistered(true)},
    406: (response)=>{}
  }

  function registerAction({description,statusCode}){
    validateRegister[statusCode](description);
  }

return (
  <AuthBody>
    <FormContainer title={'Cadastro'}>
      <Form 
        asyncRequest={register}
        asyncRequestAction={registerAction}
      >
        <TextField  
        icon="person"
        type="text" 
        id='nome'
        name='nome' 
        placeholder='Digite seu nome de usuário' 
        required
        />
        <TextField  
        icon="mail"
        type="email" 
        id='email'
        name='email' 
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
        <ButtonArea value="Cadastrar" resetValue={"Limpar"}/>
        <Link to='/validate'>Ir para validação de token</Link>
        <Link to='/login'>Ir para login</Link>
      </Form>
    </FormContainer>
  </AuthBody>
);
}

export default Cadastro;