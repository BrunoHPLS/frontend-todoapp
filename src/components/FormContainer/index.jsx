import React, { useContext } from 'react';
import { MediaContext } from '../../contexts/MediaContext';
import { Container, Description, Title, TitleDiv } from './style';

function FormContainer({children,title,description}) {
  const {media} = useContext(MediaContext);

  return (
    <Container media={media}>
      <TitleDiv>
        <Title media={media}>{title ?? "Formulário"}</Title>
        {description && <Description>{description}</Description>}
      </TitleDiv>
      {children}
    </Container>
  );
}

export default FormContainer;