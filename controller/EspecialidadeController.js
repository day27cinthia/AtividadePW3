const express = require('express');

const especialidade = require('../Model/Especialidade');

//CONFIGURAR ROTAS//
const router = express.Router();

// DEFINIR ROTAS //

// ROTA DE INSERÇÃO DE CATEGORIA (VERBO HTTP: POST)//
/*
Métodos do verbo da rota:
1º - A rota em si
2º - A ação que a rota deve executar (arrow function)
*/

// CADASTRAR ESPECIALIDADE
router.post(
    '/especialidade/cadastrarEspecialidade',
    (req, res)=>{
       
        let { nome_especialidade } = req.body;

        especialidade.create(
            {nome_especialidade}
        ).then(
            ()=>{
                res.send('DADOS DA ESPECIALIDADE INSERIDOS COM SUCESSO!');
            }
        );
    }
);

// LISTAR ESPECIALIDADES
router.get(
    '/especialidade/listarEspecialidade',
    (req, res)=>{
        //{order:['id', 'DESC']}
        especialidade.findAll()
                 .then(
                     (especialidades)=>{
                        res.send(especialidades);
                     }
                 );

        //res.send('ROTA DE LISTAGEM GERAL DE ESPECIALIDADE');
    }
);

// LISTAR ESPECIALIDADES POR ID
router.get( '/especialidade/listarEspecialidade/:id', (req, res)=>{

    let {id} = req.params;
    especialidade.findByPk(id)
             .then(
                 (especialidades)=>{
                    res.send(especialidades);
                 }
             );

});

// ALTERAR ESPECIALIDADE
router.put(
    '/especialidade/alterarEspecialidade',
    (req, res)=>{

        let {id, nome_especialidade} = req.body;

        especialidade.update(
                {nome_especialidade},
                {where: {id}}
        ).then(
            ()=>{
                res.send('DADOS DE ESPECIALIDADES ALTERADOS !');
            }
        );

    }
);
// EXCLUIR ESPECIALIDADE
router.delete(
    '/especialidade/excluirEspecialidade',
    (req, res)=>{

        let {id} = req.body;

        especialidade.destroy(
            {where: {id}}
        ).then(

            ()=>{
                res.send('ESPECIALIDADE EXCLUÍDA COM SUCESSO!');
            }

        );

    }
);

module.exports = router;