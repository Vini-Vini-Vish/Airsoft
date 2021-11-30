const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended : false}));

let usuario = models.CadUsuario;
let Loc = models.CadLoc;
let Iten = models.CadIten;

//Chamada para Inserir dados

app.get('/inserir',async(req,res)=>{
    let inserir = await usuario.create({
        emailUser: "usuario_teste@gmail.com",
        nomeUser: "Usuario Teste",
        cpfUser: "123456789",
        numTelUser: "1898157465",
        senhaUser: "789456123",
        confSenhaUser: "789456123",
        createAt: new Date(),
        updateAT: new Date()
    });
    res.send('Usuario inserido com sucesso!');
})

// Chamadas de Consulta

//geral
app.get('/consulta',async(req,res)=>{
    let consulta = await usuario.findAll();
    res.send(consulta);
});

//usando atributos
app.get('/consultaAt',async(req,res)=>{
    let consulta = await usuario.findAll({attributes: ['emailUser', 'nomeUser', 'cpfUser', 'numTelUser', 'senhaUser', 'confSenhaUser']});
    res.send(consulta);
});

//usando ID
app.get('/consultaSe',async(req,res)=>{
    let consulta = await usuario.findAll( {where: {id: 2} });
    res.send(consulta);
});

//Fim Consulta

//Chamada Alteração

app.get('/alterar',async(req,res)=>{
    let alterar = await usuario.update({
        emailUser: "teste_teste@gmail.com",
        nomeUser: "Usuario Teste",
        cpfUser: "123456789",
        numTelUser: "1898157465",
        senhaUser: "789456123",
        confSenhaUser: "789456123"
    }, 
        { where: { id: 1 }
    });
    res.send(alterar);
});

//Fim Alteração

app.get('/',(req,res) => {
    res.send('Servidor back-end funcionando');
})

let port = process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor ON');
})


