import React from 'react';
import { Button, Container, ResetButton } from './style';

function ButtonArea({value,resetValue}) {
  return (
    <Container>
        <Button value={value}/>
        {resetValue && <ResetButton value={resetValue} />}
    </Container>
  );
}

export default ButtonArea;