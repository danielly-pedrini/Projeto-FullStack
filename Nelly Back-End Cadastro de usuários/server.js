import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

// Middleware
app.use(express.json())
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://yourfrontendapp.com' 
    : '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

// Request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} | ${req.method} ${req.path}`)
  next()
})

// Helper para validar dados do usuário
const validateUserData = (data) => {
  const errors = []
  
  if (!data.email || !data.email.includes('@')) {
    errors.push('Email inválido')
  }
  
  if (!data.name || data.name.trim() === '') {
    errors.push('Nome é obrigatório')
  }
  
  if (data.age !== undefined && (isNaN(Number(data.age)) || Number(data.age) < 0)) {
    errors.push('Idade deve ser um número positivo')
  }
  
  return errors
}

// Rota GET para listar usuários
app.get('/usuarios', async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: { name: 'asc' }
    })
    res.status(200).json(users)
  } catch (error) {
    console.error("Erro ao buscar usuários:", error)
    res.status(500).json({ error: "Erro ao buscar usuários", details: error.message })
  }
})

// Rota GET para buscar usuário específico
app.get('/usuarios/:id', async (req, res) => {
  try {
    const id = req.params.id
    
    const user = await prisma.user.findUnique({
      where: { id }
    })
    
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" })
    }
    
    res.status(200).json(user)
  } catch (error) {
    console.error("Erro ao buscar usuário:", error)
    res.status(500).json({ error: "Erro ao buscar usuário", details: error.message })
  }
})

// Rota POST para criar usuário
app.post('/usuarios', async (req, res) => {
  try {
    const { email, age, name } = req.body
    
    // Validação dos dados
    const errors = validateUserData(req.body)
    if (errors.length > 0) {
      return res.status(400).json({ error: "Dados inválidos", details: errors })
    }
    
    // Verificar se email já existe
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })
    
    if (existingUser) {
      return res.status(409).json({ error: "Email já cadastrado" })
    }
    
    const user = await prisma.user.create({
      data: {
        email,
        age: Number(age),
        name
      }
    })
    
    res.status(201).json({ user, message: "Usuário criado com sucesso!" })
  } catch (error) {
    console.error("Erro ao criar usuário:", error)
    res.status(500).json({ error: "Erro ao criar usuário", details: error.message })
  }
})

// Rota PUT para atualizar usuário
app.put('/usuarios/:id', async (req, res) => {
  try {
    const id = req.params.id
    const { email, age, name } = req.body
    
    // Validação dos dados
    const errors = validateUserData(req.body)
    if (errors.length > 0) {
      return res.status(400).json({ error: "Dados inválidos", details: errors })
    }
    
    // Verificar se usuário existe
    const existingUser = await prisma.user.findUnique({
      where: { id }
    })
    
    if (!existingUser) {
      return res.status(404).json({ error: "Usuário não encontrado" })
    }
    
    // Verificar se o email já existe para outro usuário
    if (email !== existingUser.email) {
      const emailExists = await prisma.user.findFirst({
        where: {
          email,
          NOT: { id }
        }
      })
      
      if (emailExists) {
        return res.status(409).json({ error: "Email já utilizado por outro usuário" })
      }
    }
    
    const user = await prisma.user.update({
      where: { id },
      data: {
        email,
        age: Number(age),
        name
      }
    })
    
    res.status(200).json({ user, message: "Usuário atualizado com sucesso!" })
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error)
    res.status(500).json({ error: "Erro ao atualizar usuário", details: error.message })
  }
})

// Rota DELETE para excluir usuário
app.delete('/usuarios/:id', async (req, res) => {
  try {
    const id = req.params.id
    
    // Verificar se usuário existe
    const existingUser = await prisma.user.findUnique({
      where: { id }
    })
    
    if (!existingUser) {
      return res.status(404).json({ error: "Usuário não encontrado" })
    }
    
    await prisma.user.delete({
      where: { id }
    })
    
    res.status(200).json({ message: "Usuário deletado com sucesso!" })
  } catch (error) {
    console.error("Erro ao deletar usuário:", error)
    res.status(500).json({ error: "Erro ao deletar usuário", details: error.message })
  }
})

// Tratamento de erros para rotas não encontradas
app.use((req, res) => {
  res.status(404).json({ error: "Rota não encontrada" })
})

// Tratamento global de erros
app.use((err, req, res, next) => {
  console.error("Erro inesperado:", err)
  res.status(500).json({ error: "Erro interno do servidor", details: err.message })
})

// Iniciar servidor
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
  console.log(`Ambiente: ${process.env.NODE_ENV || 'desenvolvimento'}`)
})

// Garantir que o Prisma seja desconectado ao encerrar
process.on('SIGINT', async () => {
  await prisma.$disconnect()
  process.exit(0)
})