import React from 'react';
import { PasswordRevealLabel } from './style';


function PasswordRevealButton({name,checked,toggleCheck}) {

  return (
    <>
        <input 
        type="checkbox" 
        hidden 
        name={name} 
        id={name}
        />
        <PasswordRevealLabel htmlFor={name} onClick={()=>{toggleCheck()}} checked={checked}/>
    </>
  );
}

export default PasswordRevealButton;