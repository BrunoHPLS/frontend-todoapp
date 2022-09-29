import React from 'react';
import { Anchor } from './style';

function Link({children,to}) {
  return <Anchor to={to}>{children}</Anchor>;
}

export default Link;