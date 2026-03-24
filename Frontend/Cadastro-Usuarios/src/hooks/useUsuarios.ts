import { QueryClient, useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import axios from 'axios';  


import { UsuariosData } from '../interface/UsusariosData';
import { cadastrarUsuario, deletarUsuario } from '../sevice/usuarioServise';

const API_URL = 'http://localhost:8081';

const fetchData = async (): Promise<UsuariosData[]> => {
    const response = await axios.get<UsuariosData[]>(API_URL+"/usuarios");
    return response.data;
}

const createusuario = async (usuario: UsuariosData): Promise<UsuariosData> => {
    const response = await axios.post<UsuariosData>(API_URL+"/usuarios", usuario);
    return response.data;
}

export function useUsuarios() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['usuarios-data'],
        retry: 2
    })

    const queryClient = useQueryClient()
    const mutatuin = useMutation({
        mutationFn: cadastrarUsuario,
        onSuccess
            : () => {
                queryClient.invalidateQueries({ queryKey: ['usuarios-data'] })
            }
    })  

    const deletarMutation = useMutation({
        mutationFn: deletarUsuario,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['usuarios-data'] })
        }
    })

    return {
        ...query,
        data: query.data,
        createUsuario: mutatuin.mutate,
        deleteUsuario: deletarMutation.mutate    
    }
}