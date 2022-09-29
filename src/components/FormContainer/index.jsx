import React from 'react';
import { Container, Description, Title, TitleDiv } from './style';

function FormContainer({children,title,description}) {
  return (
    <Container>
      <TitleDiv>
        <Title>{title ?? "Formulário"}</Title>
        {description && <Description>{description}</Description>}
      </TitleDiv>
      {children}
    </Container>
  );
}

export default FormContainer;