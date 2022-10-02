import React, { useState } from 'react';
import TextField from '../TextField';
import { Container, FormMessage, FormTitle } from './style';

function Form({fields,children,asyncRequest,asyncRequestAction,asyncRequestWithResponse,formTitle,...rest}) {

  const [responseStatus,setResponseStatus] = useState(undefined);
  const [resetAll,setResetAll] = useState(false);
  const [loading,setLoading] = useState(false);

  function resetMessage(){
    setResponseStatus(undefined);
  }

  return (
    <Container 
    isLoading={loading}
    onSubmit={async (event)=>{
      setLoading(true);
      event.preventDefault();
      let formDto = {};
      fields.forEach(({id})=> {
          let value = event.target[id].value;
          formDto[id] = value;
      });
      if(asyncRequestWithResponse){
        setResponseStatus(await asyncRequestWithResponse(formDto));
      }

      if(asyncRequest){
        const response = await asyncRequest(formDto)
        setResponseStatus(response);
        asyncRequestAction(response);
      }
      setLoading(false);
    }}
    onReset={(event)=>{event.target.reset();
    setResetAll(true)}} 
    {...rest}
    >
        {formTitle && <FormTitle>{formTitle}</FormTitle>}
        {fields.map(({icon,type,id,name,placeholder,required},index)=>(
          <TextField 
          key={index} 
          icon={icon} 
          type={type} 
          id={id} 
          name={name} 
          placeholder={placeholder} 
          required={required} 
          resetMessage={resetMessage} 
          resetAll={resetAll}
          setResetAll={setResetAll}
          />
        ))}
        {children}
        {responseStatus && <FormMessage code={responseStatus.statusCode}>{responseStatus.description}</FormMessage>}
    </Container>
  );
}

export default Form;