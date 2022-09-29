import React, { useState } from 'react';
import { Container, FormMessage } from './style';

function Form({children,asyncRequest,asyncRequestAction,asyncRequestWithResponse,formTitle,...rest}) {

  const [responseStatus,setResponseStatus] = useState(undefined);
  const [resetAll,setResetAll] = useState(false);

  function resetMessage(){
    setResponseStatus(undefined);
  }

  return (
    <Container 
    formTitle={formTitle}
    onSubmit={async (event)=>{
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

    }}
    onReset={(event)=>{event.target.reset();
    setResetAll(true)}} 
    {...rest}
    >
        {React.Children.map(children, child => {
          if (React.isValidElement(child) && child.type.name==="TextField" ) {
            return React.cloneElement(child, { resetall: resetAll,setresetall: setResetAll,resetonchange: resetMessage });
          }
          return child;
        })}
        {responseStatus && <FormMessage code={responseStatus.statusCode}>{responseStatus.description}</FormMessage>}
    </Container>
  );
}

export default Form;