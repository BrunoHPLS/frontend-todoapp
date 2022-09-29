import api from "./api";

export async function isLogged(){
    return api.get('/usuario/is-expired');
}

export async function loginUser(email,senha){
    return api.post('/usuario/auth',{
        email,senha
    });
}

export async function register({email,nome,senha}){
    return api.post('/usuario/cadastro',{
        email,nome,senha
    })
    .then(({data,status})=>{
        return {description: data,statusCode: status}})
    .catch(({response:{data:{description,statusCode}}})=>{
        return {description,statusCode};
    });
}

export async function validate({token}){
    return api.get('usuario/validate',{
        params: {
            token
        }
    })
    .then(({data,status})=>{
        return {description: data,statusCode: status}})
    .catch(({response:{data:{description,statusCode}}})=>{
        return {description,statusCode};
    });
}

export async function newToken({email}){
    return api.get('usuario/new-token',{
        params: {
            email
        }
    })
    .then(({data,status})=>{
        return {description: data,statusCode: status}})
    .catch(({response:{data:{description,statusCode}}})=>{
        return {description,statusCode};
    });
}

export async function reactive({email,nome,senha}){
    return api.post('/usuario/reativar',{
        email,nome,senha
    })
    .then(({data,status})=>{
        return {description: data,statusCode: status}})
    .catch(({response:{data:{description,statusCode}}})=>{
        return {description,statusCode};
    });
}

export async function alteraSenha({senha,token}){
    return api.patch('/usuario/altera-senha',{
        senha,token
    })
    .then(({data,status})=>{
        return {description: data,statusCode: status}})
    .catch(({response:{data:{description,statusCode}}})=>{
        return {description,statusCode};
    });
}

export async function alteraNome(nome){
    return api.patch('/usuario/altera-nome',{
        nome
    });
}