import React, { useState, useEffect,createContext } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

const MediaContext = createContext();


function MediaProvider({children}) {

    let media = 'mobile';
    
    if(useMediaQuery('(min-width: 700px)')){
        media = 'tablet';
    }

    if(useMediaQuery('(min-width: 1200px)')){
        media = 'large';
    }

  return (
    <MediaContext.Provider value={{media}}>
        {children}
    </MediaContext.Provider>
  )
}

export  {MediaContext, MediaProvider};