import { useState } from 'react'
import './Style.css'
import Trash from '../../assets/lixeira.webp'
import { useUsuarios } from '../../hooks/useUsuarios';
import { UsuariosData } from '../../interface/UsusariosData';

function Home() {
  const { data, createUsuario, deleteUsuario } = useUsuarios();
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault()
    createUsuario({ nome, email, senha })
  }
  
  return (
    <>
      <div className='container'>
        <h1>Cadastro de Usuários</h1>
        <form onSubmit={handleSubmit}> 
        
        <div className='input'>  
          <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)} type="text" placeholder='Nome:' />
          <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} type="email" placeholder='Email:' />
          <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSenha(e.target.value)} type="password" placeholder='Senha:' />
          <button type='submit'>Cadastrar</button>
        </div>

        </form>
        {data?.map((usuario: UsuariosData) => (
          <div className='informacoes' key={usuario.id}>
            <div>
              <p>nome: {usuario.nome}</p>
              <p>email: {usuario.email}</p>
              <p>senha: {usuario.senha}</p>
            </div>
            <button onClick={() => deleteUsuario(usuario.id!)}>
              <img src={Trash} alt="Trash" />
            </button>
          </div>
        ))}
        
      </div>
    </>
  )
}

export default Home