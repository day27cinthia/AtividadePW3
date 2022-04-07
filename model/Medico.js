/*Importação do módulo do Sequelize*/
const Sequelize = require('sequelize');

/*Importação da conexão com o banco de dados*/
const connection = require('../database/database');

/*Importação da Especialidade*/
const Especialidade = require('./Especialidade');

/*Importação da tabela de categoria para criação da chave estrangeira
representanto a cardinalidade*/

const Medico = connection.define(
    'tbl_medico',
    {
        nome_medico: {
            type: Sequelize.STRING(500),
            allowNull: false,
         },
         email_medico: {
            type: Sequelize.STRING(100),
            allowNull: false,
         },
         telefone_medico: {
            type: Sequelize.STRING(10),
            allowNull: false,
         },
         celular_medico: {
            type: Sequelize.STRING(11),
            allowNull: false,
         },
    }
);

/*Implementação da  CHAVE ESTRANGEIRA - LADO N*/
Especialidade.hasMany(Medico);

/*Implementação da  CHAVE PRIMÁRIA - LADO 1*/
Medico.belongsTo(Especialidade);

/*Executar a criação da tabela no Banco de Dados*/
// Medico.sync({ force: true }); // Força a criação da tabela

//exportação da tabela Categoria para conseguir utilizar nos outros arquivos
module.exports = Medico;