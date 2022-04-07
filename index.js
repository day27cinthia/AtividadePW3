/* Importação do pacote express */
const express = require('express');
const { listen } = require('express/lib/application');

/*Instancia executavel do express */
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const connection = require('./database/database');

/*Importação da conexão com o banco de dados*/
// const connection = require('./database/database');

/*Importação das models*/
const Medico = require('./model/Medico');
const Especialidade = require('./model/Especialidade');

/*Importação das rotas*/
const especialidadeController = require('./controller/EspecialidadeController');
const medicoController = require('./controller/MedicoController');

app.use('/', medicoController);
app.use('/', especialidadeController);

/*Servidor de requisições da aplicação */
app.listen(3000, ()=>{
    console.log('Servidor Rodando na Porta 3000 - URL: http://Localhost:3000');
}); 