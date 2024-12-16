const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db'); // Conexão com o banco de dados

// Carregar variáveis de ambiente
dotenv.config();

// Conectar ao banco de dados
connectDB();

// Inicializar o app Express
const app = express();

// Middleware de log (opcional, útil para desenvolvimento)
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Middleware para permitir comunicação entre domínios
app.use(cors());

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Rotas
const userRoutes = require('./routes/userRoutes'); // Rotas de usuário
const examRoutes = require('./routes/examRoutes'); // Rotas de exames

// Definir rotas principais
app.use('/api/users', userRoutes); // Rota base para usuários
app.use('/api/exams', examRoutes); // Rota base para exames

// Rota raiz
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Bem-vindo ao sistema de laboratório!' });
});

// Middleware para tratamento de erros
app.use(errorHandler);

// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em modo ${process.env.NODE_ENV} na porta ${PORT}`);
});

const errorHandler = require('./middleware/errorMiddleware');
app.use(errorHandler);
