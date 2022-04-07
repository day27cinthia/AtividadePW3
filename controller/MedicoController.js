const express = require('express');
const app = express();
const router = express.Router();

const medico = require('../model/Medico');

// CADASTRAR MEDICO
router.post('/medico/cadastrarMedico', (req, res) => {
    let {
       nome_medico,
       email_medico,
       telefone_medico,
       celular_medico,
       tblEspecialidadeId,
    } = req.body;
 
    medico
       .create({
          nome_medico,
          email_medico,
          telefone_medico,
          celular_medico,
          tblEspecialidadeId,
       })
       .then(() => res.send('Medico inserido com sucesso !'));
 });
 

// LISTAR ESPECIALIDADES
router.get(
    '/medico/listarMedico',
    (req, res)=>{
        //{order:['id', 'DESC']}
        medico.findAll()
                 .then(
                     (medicos)=>{
                        res.send(medicos);
                     }
                 );

    }
);

// LISTAR MEDICO POR ID
router.get( '/medico/listarMedico/:id', (req, res)=>{

    let {id} = req.params;
    medico.findByPk(id)
             .then(
                 (medicos)=>{
                    res.send(medicos);
                 }
             );

});

// ALTERAR MEDICO
router.put(
    '/medico/alterarMedico',
    (req, res)=>{

        let { id, nome_medico, email_medico, telefone_medico, celular_medico } =
      req.body;
    medico
      .update(
         { nome_medico, email_medico, telefone_medico, celular_medico },
         { where: { id } }
        ).then(
            ()=>{
                res.send('DADOS DE MEDICO ALTERADOS !');
            }
        );

    }
);
// EXCLUIR MEDICO
router.delete(
    '/medico/excluirMedico',
    (req, res)=>{

        let {id} = req.body;

        medico.destroy(
            {where: {id}}
        ).then(

            ()=>{
                res.send('MEDICO EXCLUÍDO COM SUCESSO!');
            }

        );

    }
);

module.exports = router;