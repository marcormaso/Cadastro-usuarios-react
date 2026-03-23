import { useState } from 'react'
import './Style.css'
import Trash from '../../assets/lixeira.webp'
import { useUsuarios } from '../../hooks/useUsuarios';
function Home() {
  const{ data } = useUsuarios();
  
  return (
    <>
      <div className='container'>
        <h1>Cadastro de Usuários</h1>
        <form action=""> 
        
        <div className='input'>  
          <input name='nome' type="text" placeholder='Nome:' />
          <input name='email' type="email" placeholder='Email:' />
          <input name='senha' type="password" placeholder='Senha:' />
          <button type='submit'>Cadastrar</button>
        </div>

        </form>
        {data?.map((UsuariosData) => (
          <div className='informacoes'>
            <div>
              <p>nome: {UsuariosData.name}</p>
              <p>email: {UsuariosData.email}</p>
              <p>senha: {UsuariosData.password}</p>
            </div>
              <button><img src={Trash} alt="Trash" /></button>
            
          </div>
        ))}
        
      </div>
    </>
  )
}

export default Home