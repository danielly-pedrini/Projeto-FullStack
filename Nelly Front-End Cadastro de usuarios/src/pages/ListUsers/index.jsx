import { useEffect, useState } from "react"
import api from "../../../services/api"
import TopBackground from "../../components/topbackground"
import { useNavigate } from 'react-router-dom'
import trash from '../../assets/trash.png'
import edit from '../../assets/edit.png'
import { Subtitle } from "../Home/styles"
import { 
  ContainerUser, 
  CardUsers, 
  AvatarUser, 
  TrashIcon, 
  Container, 
  Button, 
  EditIcon, 
  IconContainer,
  ModalBackdrop,
  ModalContent
} from './styles'

function ListUsers() {
    const [users, setUsers] = useState([])
    const [editingUser, setEditingUser] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: ''
    })

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const { data } = await api.get('/usuarios')
            setUsers(data)
        } catch (error) {
            console.error("Erro ao buscar usuários:", error)
        }
    }

    async function deleteUsers(id) {
        try {
            await api.delete(`/usuarios/${id}`)
            const updateUsers = users.filter(user => user.id !== id)
            setUsers(updateUsers)
        } catch (error) {
            console.error("Erro ao deletar usuário:", error)
        }
    }

    function handleEditClick(user) {
        setEditingUser(user)
        setFormData({
            name: user.name,
            age: user.age,
            email: user.email
        })
        setIsModalOpen(true)
    }

    function handleInputChange(e) {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        
        try {
            await api.put(`/usuarios/${editingUser.id}`, formData)
            // Atualizar a lista de usuários
            await fetchUsers()
            // Fechar o modal
            setIsModalOpen(false)
        } catch (error) {
            console.error("Erro ao atualizar usuário:", error)
        }
    }

    const home = useNavigate()
    
    return (
        <Container>
            <TopBackground />

            <Subtitle style={{ margin: 20 }}>Listagem de Usuários</Subtitle>
            <ContainerUser>
                {users.map((user, index) => (
                    <CardUsers key={user.id || index}>
                        <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                        <IconContainer>
                            <EditIcon 
                                src={edit} 
                                alt='icone-editar' 
                                onClick={() => handleEditClick(user)}
                            />
                            <TrashIcon 
                                src={trash} 
                                alt='icone-lixo' 
                                onClick={() => deleteUsers(user.id)} 
                            />
                        </IconContainer>
                    </CardUsers>
                ))}
            </ContainerUser>

            {isModalOpen && (
                <ModalBackdrop>
                    <ModalContent>
                        <h2>Editar Usuário</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name">Nome:</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="age">Idade:</label>
                                <input
                                    id="age"
                                    name="age"
                                    type="number"
                                    value={formData.age}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="button-group">
                                <button type="submit">Salvar</button>
                                <button 
                                    type="button" 
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </ModalContent>
                </ModalBackdrop>
            )}

            <Button type="button" theme="primary" onClick={() => home('/')}>Voltar</Button>
        </Container>
    )
}

export default ListUsers