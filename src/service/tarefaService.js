import api from "./api";

export async function listAll(){
    return api.get('/tarefa');
}