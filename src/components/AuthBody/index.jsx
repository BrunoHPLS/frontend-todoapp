import React, { useContext } from 'react';
import { MediaContext } from '../../contexts/MediaContext';
import Logo from '../Logo';
import { MainBody, ScreenCopyRight, ScreenDiv } from './style';

function AuthBody({children}) {
    const {media} = useContext(MediaContext);

  return (
    <MainBody media={media}>
        {media === 'large' ?
        <ScreenDiv>
            <Logo subtitle/>
            <ScreenCopyRight 
            href="https://br.freepik.com/vetores-gratis/empresario-segurando-um-lapis-na-grande-lista-de-verificacao-completa-com-marcas-de-selecao_11879344.htm#query=task&position=1&from_view=search">
              Imagem de jcomp no Freepik
            </ScreenCopyRight>
        </ScreenDiv>
        :<Logo/>}
        {children}
    </MainBody>
  );
}

export default AuthBody;