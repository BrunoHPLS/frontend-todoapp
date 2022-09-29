import React from 'react';
import Form from '../../components/Form';
import ButtonArea from '../../components/Form/ButtonArea';
import FormContainer from '../../components/FormContainer';
import Link from '../../components/Link';
import TextField from '../../components/TextField';
import { validate } from '../../service/userService';
import { MainBody } from '../style';


function ValidaToken() {

return (
  <MainBody>
    <FormContainer title={'Validar Login'}>
      <Form 
        asyncRequestWithResponse={validate}
      >
        <TextField 
        icon="key"
        type="text" 
        id='token' 
        name='token' 
        placeholder='Digite o token' 
        required
        />
        <ButtonArea value="Validar"/>
        <Link to='/cadastro'>Ir para cadastro</Link>
        <Link to='/login'>Ir para login</Link>
      </Form>
    </FormContainer>
  </MainBody>
);
}

export default ValidaToken;