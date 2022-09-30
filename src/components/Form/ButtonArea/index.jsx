import React, { useContext } from 'react';
import { MediaContext } from '../../../contexts/MediaContext';
import { Button, Container, ResetButton } from './style';

function ButtonArea({value,resetValue}) {
  const {media} = useContext(MediaContext);

  return (
    <Container>
        <Button value={value} media={media}/>
        {resetValue && <ResetButton value={resetValue} media={media}/>}
    </Container>
  );
}

export default ButtonArea;