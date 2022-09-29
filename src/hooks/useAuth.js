import { useEffect, useState } from "react";
import api from "../service/api";
import { isLogged, loginUser } from "../service/userService";

export default function useAuth(){
    const [authenticated,setAuthenticated] = useState(localStorage.getItem('token') != undefined);
    const [loading,setLoading] = useState(true);
    const [usuario,setUsuario] = useState(undefined);

    useEffect(
        ()=>{
            const token = localStorage.getItem('token');
            const usuario = localStorage.getItem('usuario');

            async function load(){
                await loadAuth(token,usuario);

                setLoading(false);
            }

            load();
        },
        []);

    async function loadAuth(token,usuario){
        if(token){

            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;

            const {data} = await isLogged();

            if(data){
                setUsuario(JSON.parse(usuario));
                setAuthenticated(true);
            }else{
                handleLogout();
            }
        } 
    }

    async function handleLogin({loginEmail,senha}) {
       return await loginUser(loginEmail,senha)
       .then(({data:{token,nome,email},status})=>{
            localStorage.setItem('token',JSON.stringify(token));
            localStorage.setItem('usuario',JSON.stringify({nome: nome,email: email}))

            api.defaults.headers.Authorization = `Bearer ${token}`;

            setUsuario({nome: nome,email: email});
            setAuthenticated(true);
            return {description: "Olá "+nome,statusCode: status};
        }).catch(({response:{data:{description,statusCode}}})=>{
            return {description,statusCode};
        });
    }

    function handleLogout() {
        setAuthenticated(false);
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        setUsuario(undefined);
        api.defaults.headers.Authorization = undefined;
    }

    return { authenticated, handleLogin,handleLogout, loading, usuario};
}