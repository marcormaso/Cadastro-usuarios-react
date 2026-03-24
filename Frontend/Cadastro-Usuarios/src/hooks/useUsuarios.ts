import { useMutation, useQuery } from '@tanstack/react-query';
import axios,{AxiosPromise} from 'axios';  

import { UsuariosData } from '../interface/UsusariosData';
import { cadastrarUsuario,deletarUsuario } from '../sevice/usuarioServise';


const API_URL = 'http://localhost:8081';

const fetchData = async (): AxiosPromise<UsuariosData[]> => {
    const response = await axios.get(API_URL+"/usuarios");
    return response;
}

const createusuario = async (usuario: UsuariosData): Promise<UsuariosData> => {
    const response = await axios.post(API_URL+"/usuarios", usuario);
    return response.data;
}
export function useUsuarios() {
const query = useQuery(
    {
        queryFn: fetchData,
        queryKey: ['usuarios-data'],
        retry: 2
    }
)

const mutatuin = useMutation({
    mutationFn: cadastrarUsuario
})  

const deletarMutation = useMutation({
    mutationFn: deletarUsuario
})
return {
    ...query,
    data: query.data?.data,
    createUsuario: mutatuin.mutate,
    deleteUsuario: deletarMutation.mutate    
}
}

        