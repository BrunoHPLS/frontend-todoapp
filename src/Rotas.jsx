import React, { useContext } from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import { MediaContext } from './contexts/MediaContext';
import { ThemeContext } from './contexts/ThemeContext';
import GlobalStyles from './globalStyles';
import AlteraSenha from './pages/AlteraSenha';
import Cadastro from './pages/Cadastro';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './pages/Login';
import ReativarConta from './pages/ReativarConta';
import ValidaToken from './pages/ValidaToken';
import ThemeSwitcher from './components/ThemeSwitcher';


function CustomRoute({isPrivate,isOnlyPublic,CustomLoading,...rest}){
    const { authenticated , loading} = useContext(AuthContext);
  
    if(loading){
      return CustomLoading || <h1>Carregando...</h1>
    }
  
    if(isPrivate && !authenticated){
        return <Navigate to={'/login'}/>
    }
  
    if(isOnlyPublic && authenticated){
        return <Navigate to={'/'}/>
    }
  
    return <Outlet {...rest }/>
}

function Rotas() {

    const {theme} = useContext(ThemeContext);
    const {media} = useContext(MediaContext);

  return (
    <>
        <GlobalStyles theme={theme} media={media}/>
        <ThemeSwitcher/>
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<CustomRoute isPrivate CustomLoading={<h1>Carregando Home</h1>}/>}>
                    <Route path='/' exact element={<Home/>}/>
                </Route>
                <Route path='/login' exact  element={<CustomRoute isOnlyPublic/>}>
                    <Route path='/login' exact element={<Login/>}/>
                </Route>
                <Route path='/cadastro'  exact element={<CustomRoute isOnlyPublic/>}>
                    <Route path='/cadastro'  exact element={<Cadastro/>}/>
                </Route>
                <Route path='/validate'  exact element={<CustomRoute isOnlyPublic/>}>
                    <Route path='/validate'  exact element={<ValidaToken/>}/>
                </Route>
                <Route path='/nova-senha' exact element={<CustomRoute isOnlyPublic/>}>
                    <Route path='/nova-senha'  exact element={<AlteraSenha/>}/>
                </Route>
                <Route path='/reativar-conta'  exact element={<CustomRoute isOnlyPublic/>}>
                    <Route path='/reativar-conta'  exact element={<ReativarConta/>}/>
                </Route>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default Rotas;