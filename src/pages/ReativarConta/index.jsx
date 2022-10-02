import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthBody from '../../components/AuthBody';
import Form from '../../components/Form';
import ButtonArea from '../../components/Form/ButtonArea';
import FormContainer from '../../components/FormContainer';
import Link from '../../components/Link';
import TextField from '../../components/TextField';
import { reactive } from '../../service/userService';

function ReativarConta() {
  const formDescription = `Semelhante ao cadastro, um token será enviado para o seu email e você será redirecionado para a tela de validação de tokens para reativar seu usuário.\nAqui será possível reativar ele com um novo nome e senha.`
  const navigate = useNavigate();
  const [registered,setRegistered] = useState(false);
  
  const textFields = [
    {
      icon:"person",
      type:"text" ,
      id:'nome',
      name:'nome' ,
      placeholder:'Digite seu nome de usuário' ,
      required: true
    },
    {
      icon:"mail",
      type:"email" ,
      id:'email',
      name:'email' ,
      placeholder:'Digite seu email' ,
      required: true
    },
    {
      icon:"password",
      type:"password" ,
      id:'senha',
      name:'senha' ,
      placeholder:'Digite sua nova senha' ,
      required: true
    }
  ];  

  useEffect(()=>{
      if(registered){
          navigate('/validate',{replace: true});
      }
  },[registered]);

  const validateRegister = {
    202: (response)=>{setRegistered(true)},
    406: (response)=>{}
  }

  function registerAction({description,statusCode}){
    validateRegister[statusCode](description);
  }

  return (
    <AuthBody>
      <FormContainer title={"Reativar usuário"} description={formDescription}>
        <Form
          fields={textFields}
          asyncRequest={reactive}
          asyncRequestAction={registerAction}
        >
          <ButtonArea value="Reativar"/>
          <Link to='/validate'>Ir para validação de token</Link>
          <Link to='/login'>Ir para login</Link>
        </Form>
      </FormContainer>
  </AuthBody>
  );
}

export default ReativarConta;