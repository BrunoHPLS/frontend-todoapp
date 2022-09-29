import React, { useEffect, useState } from 'react';
import PasswordRevealButton from './PasswordRevealButton';
import { AnimatedInputIcon, InputArea, InputContainer, InputIcon } from './style';

function TextField({type,id,name,placeholder,required,icon,resetonchange,resetall,setresetall,...rest}) {
    const isPassword = type === 'password';
    const [isChecked,setChecked] = useState(false);
    const [value,setValue] = useState('');
    const [focused,setFocused] = useState(false);

    useEffect(()=>{
      if(resetall){
        setValue('');
      }
    },[resetall]);

    function toggleCheck(){
        setChecked(!isChecked);
    }

  return (
    <InputContainer focused={focused}>
       {icon &&  focused ? <AnimatedInputIcon htmlFor={name} >{icon}</AnimatedInputIcon> : <InputIcon htmlFor={name} >{icon}</InputIcon>}
        <InputArea 
        onFocus={()=>{setFocused(true)}}
        onBlur={()=>{setFocused(false)}}
        type={(!isPassword) ? type:(isChecked) ? "text":"password"}
        autoComplete={isPassword ? "off":"on"} 
        id={id} name={name} 
        placeholder={placeholder} 
        required={required} 
        value={value}
        onChange={(event)=>{setresetall(false);setValue(event.target.value);resetonchange();}}
        {...rest}
        
        />
       {(isPassword) && <PasswordRevealButton name={name+"_reveal"} checked={isChecked} toggleCheck={toggleCheck} />}
    </InputContainer>
  );
}

export default TextField;