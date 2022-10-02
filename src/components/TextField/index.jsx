import React, { useContext, useEffect, useState } from 'react';
import { MediaContext } from '../../contexts/MediaContext';
import PasswordRevealButton from './PasswordRevealButton';
import { AnimatedInputIcon, InputArea, InputContainer, InputIcon } from './style';

function TextField({type,id,name,placeholder,required,icon,resetMessage,resetAll,setResetAll,...rest}) {
    const isPassword = type === 'password';
    const [isChecked,setChecked] = useState(false);
    const [value,setValue] = useState('');
    const [focused,setFocused] = useState(false);
    const {media} = useContext(MediaContext);

    useEffect(()=>{
      if(resetAll){
        setValue('');
      }
    },[resetAll]);

    function toggleCheck(){
        setChecked(!isChecked);
    }

  return (
    <InputContainer focused={focused}>
       {icon &&  focused ? <AnimatedInputIcon htmlFor={name} media={media} >{icon}</AnimatedInputIcon> : <InputIcon htmlFor={name} media={media} >{icon}</InputIcon>}
        <InputArea 
        media={media}
        onFocus={()=>{setFocused(true)}}
        onBlur={()=>{setFocused(false)}}
        type={(!isPassword) ? type:(isChecked) ? "text":"password"}
        autoComplete={isPassword ? "off":"on"} 
        id={id} name={name} 
        placeholder={placeholder} 
        required={required} 
        value={value}
        onChange={(event)=>{setResetAll(false);setValue(event.target.value);resetMessage();}}
        {...rest}
        
        />
       {(isPassword) && <PasswordRevealButton name={name+"_reveal"} checked={isChecked} toggleCheck={toggleCheck} media={media} />}
    </InputContainer>
  );
}

export default TextField;