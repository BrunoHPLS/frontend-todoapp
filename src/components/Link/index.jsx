import React, { useContext } from 'react';
import { MediaContext } from '../../contexts/MediaContext';
import { Anchor } from './style';

function Link({children,to}) {
  const {media} = useContext(MediaContext);

  return <Anchor  media={media} to={to}>{children}</Anchor>;
}

export default Link;