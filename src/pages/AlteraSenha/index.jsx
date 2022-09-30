import React from 'react';
import AuthBody from '../../components/AuthBody';
import Form from '../../components/Form';
import ButtonArea from '../../components/Form/ButtonArea';
import FormContainer from '../../components/FormContainer';
import Link from '../../components/Link';
import TextField from '../../components/TextField';
import { alteraSenha, newToken } from '../../service/userService';

function AlteraSenha() {
    const formDescription = `Digite seu email abaixo para o token ser enviado.\nApós recebê-lo, digite a senha desejada e o token.\nSua senha será alterada.`

  return (
    <AuthBody>
      <FormContainer title={"Alterar Senha"} description={formDescription}>
        <Form 
          formTitle="Email"
          asyncRequestWithResponse={newToken}
        >
          <TextField 
            icon="mail"
            type="email" 
            id='email' 
            name='email' 
            placeholder='Email para o token' 
            required
          />
          <ButtonArea value={"Enviar Token"}/>
        </Form>
        <Form
          formTitle="Token e Senha"
          asyncRequestWithResponse={alteraSenha}
        >
          <TextField 
            icon="key"
            type="text" 
            id='token' 
            name='token' 
            placeholder='Digite o token' 
            required
          />
          <TextField 
            icon="password"
            type="password" 
            id='senha' 
            name='senha' 
            placeholder='Digite a nova senha' 
            required
          />
          <ButtonArea value={"Alterar senha"}/>
        </Form>
        <Link to="/login">Ir para login</Link>
      </FormContainer>
  </AuthBody>
  );
}

export default AlteraSenha;