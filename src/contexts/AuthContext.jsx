import { createContext } from "react";
import useAuth from "../hooks/useAuth";

const AuthContext = createContext();

function AuthProvider({children}){

    const { authenticated, handleLogin,handleLogout, loading, usuario} = useAuth();

    return (
    <AuthContext.Provider value={{ authenticated, handleLogin,handleLogout, loading, usuario}}>
        {children}
    </AuthContext.Provider>);
}

export {AuthContext , AuthProvider};