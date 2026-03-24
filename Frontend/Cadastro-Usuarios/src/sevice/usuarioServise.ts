import axios from 'axios';
import { UsuariosData } from "../interface/UsusariosData";

const API_URL = 'http://localhost:8081'  // ← confirma a porta!

export async function cadastrarUsuario(usuario: UsuariosData) {
    const response = await axios.post(API_URL + '/usuarios', usuario)
    return response.data
}

export async function deletarUsuario(id: number) {
    await axios.delete(API_URL + `/usuarios/${id}`)
}