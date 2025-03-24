// formas de importar o css = import './style.css' (criando um arquivo style.css)
// com a biblioteca styled mistura css com javascript(criando um arquivo styles.js)
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../../services/api'

import {
  Title,
  Subtitle,
  Container,
  ContainerInput,
  InputLabel,
  Form, 
  Input,
  UserListButton
} from './styles'

import { Button } from '../../components/button/styles'
import TopBackground from '../../components/topbackground'

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  const [notification, setNotification] = useState({ show: false, message: '', type: '' })

  const userlist = useNavigate() 

  // Função para mostrar notificação
  const showNotification = (message, type) => {
    setNotification({ show: true, message, type })
    
    // Esconde a notificação após 3 segundos
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' })
    }, 3000)
  }
  
  async function registerNewUser() {
    try {
      // Verifica se todos os campos estão preenchidos
      if (!inputName.current.value || !inputAge.current.value || !inputEmail.current.value) {
        showNotification("Por favor, preencha todos os campos obrigatórios.", "error")
        return
      }
      
      const response = await api.post('/usuarios', {
        email: inputEmail.current.value,
        age: parseInt(inputAge.current.value),
        name: inputName.current.value
      })
      
      // Se a requisição for bem-sucedida, mostra mensagem de sucesso
      showNotification("Usuário cadastrado com sucesso!", "success")
      
      // Limpa os campos do formulário
      inputName.current.value = ""
      inputAge.current.value = ""
      inputEmail.current.value = ""
      
    } catch (error) {
      console.error("Error registering user:", error)
      
      // Verifica se o erro é porque o usuário já existe
      if (error.response && error.response.status === 409) {
        showNotification("Este e-mail já está cadastrado. Por favor, use outro e-mail.", "error")
      } else {
        showNotification("Erro ao cadastrar usuário. Por favor, tente novamente.", "error")
      }
    }
  }

  return (
    <>
      <Container>
        {notification.show && (
          <div 
            style={{ 
              position: 'fixed', 
              top: '20px', 
              right: '20px', 
              padding: '15px', 
              borderRadius: '5px', 
              backgroundColor: notification.type === 'success' ? '#4caf4f' : '#f44336',
              color: 'white',
              zIndex: 1000,
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
            }}
          >
            {notification.message}
          </div>
        )}
        
        <Title>Nelly Usuários</Title>
        <TopBackground />

        <Form>
          <Subtitle>Formulário de Cadastro</Subtitle>

          <ContainerInput>
            <div>
              <InputLabel>Nome<span> *</span></InputLabel>
              <Input type="text" placeholder='Nome do usuário' ref={inputName} />
            </div>

            <div>
              <InputLabel>Idade<span> *</span></InputLabel>
              <Input type="number" placeholder='Idade do usuário' ref={inputAge} />
            </div>
          </ContainerInput>

          <div style={{ width: '100%' }}>
            <InputLabel>E-mail<span> *</span></InputLabel>
            <Input type="email" placeholder='E-mail do usuário' ref={inputEmail} />
          </div>

          <Button type='button' onClick={registerNewUser} theme="primary">Cadastrar</Button>
        </Form>

        <UserListButton className="userListButton" type='button' onClick={() => userlist('/lista-de-usuarios')} theme="primary">Ver Lista de Usuários</UserListButton>
      </Container>
    </>
  )
}

export default Home