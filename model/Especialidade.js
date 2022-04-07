/*Importação do módulo do Sequelize*/
const Sequelize = require('sequelize');

/*Importação da conexão com o banco de dados*/
const connection = require('../database/database');

/*Criação da Model da Tabela Medico*/
/*O método define Cria uma Tabela Parametros
1º - Nome da Tabela 
2º - Objeto Json que representa os campos da tabela, seus tipos e regras de preenchimento */
const Especialidade = connection.define(
    'tbl_especialidade',
    {
        nome_especialidade:{
           type: Sequelize.STRING,
           allowNull: false
        }
    }
);

/*Executar a criação da tabela no Banco de Dados*/
// Especialidade.sync({force:true});

module.exports = Especialidade;