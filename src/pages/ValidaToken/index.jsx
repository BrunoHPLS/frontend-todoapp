import React from 'react';
import AuthBody from '../../components/AuthBody';
import Form from '../../components/Form';
import ButtonArea from '../../components/Form/ButtonArea';
import FormContainer from '../../components/FormContainer';
import Link from '../../components/Link';
import TextField from '../../components/TextField';
import { validate } from '../../service/userService';


function ValidaToken() {
  const textFields = [
    {
      icon:"key",
      type:"text" ,
      id:'token' ,
      name:'token' ,
      placeholder:'Digite o token' ,
      required: true
    }
  ];

return (
  <AuthBody>
    <FormContainer title={'Validar Login'}>
      <Form 
      fields={textFields}
        asyncRequestWithResponse={validate}
      >
        <ButtonArea value="Validar"/>
        <Link to='/cadastro'>Ir para cadastro</Link>
        <Link to='/login'>Ir para login</Link>
      </Form>
    </FormContainer>
  </AuthBody>
);
}

export default ValidaToken;