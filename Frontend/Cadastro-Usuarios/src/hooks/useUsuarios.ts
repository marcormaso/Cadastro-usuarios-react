import { useQuery } from '@tanstack/react-query';
import axios,{AxiosPromise} from 'axios';  

import { UsuariosData } from '../interface/UsusariosData';


const API_URL = 'http://localhost:8081';

const fetchData = async (): AxiosPromise<UsuariosData[]> => {
    const response = await axios.get(API_URL+"/usuarios");
    return response;
}
export function useUsuarios() {
const query = useQuery(
    {
        queryFn: fetchData,
        queryKey: ['usuarios-data'],
        retry: 2
    }
)
return {
    ...query,
    data: query.data?.data
}

}