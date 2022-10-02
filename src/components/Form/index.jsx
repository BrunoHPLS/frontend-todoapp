import React, { useState } from 'react';
import { Container, FormMessage, FormTitle } from './style';

function Form({children,asyncRequest,asyncRequestAction,asyncRequestWithResponse,formTitle,...rest}) {

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
      React.Children.forEach(children, child => {
        if (React.isValidElement(child) && child.type.name==="TextField" ) {
          let field = child.props.id;
          let value = event.target[field].value;
          formDto[field] = value;
        }
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
        {React.Children.map(children, child => {
          if (React.isValidElement(child) && child.type.name==="TextField" ) {
            return React.cloneElement(child, { resetAll,setResetAll,resetMessage });
          }
          return child;
        })}
        {responseStatus && <FormMessage code={responseStatus.statusCode}>{responseStatus.description}</FormMessage>}
    </Container>
  );
}

export default Form;