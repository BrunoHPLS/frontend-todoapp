import React from 'react';
import { LogoContainer, Subtitle, Title } from './style';


function Logo({subtitle}) {
  return (
    <LogoContainer>
        <Title>Task Admin</Title>
        {subtitle && <Subtitle>Take control of your life</Subtitle>}
    </LogoContainer>
  );
}

export default Logo;