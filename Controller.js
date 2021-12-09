const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');
const { Json } = require('sequelize/dist/lib/utils');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

let usuario = models.CadUsuario;
let loc = models.CadLoc;
let iten = models.CadIten;
let protecao = models.CadPro;

//---------------------------------Usuario-------------------------------------------------------

//Inserir gravação por meio de chamada
app.post('/inserirUsuario',async(req,res) => {
    //console.log(req.body);
    let insere = await usuario.create({        
        emailUser: req.body.emailUser,
        nomeUser: req.body.nomeUser,
        cpfUser: req.body.cpfUser,
        numTelUser: req.body.numTelUser,
        senhaUser: req.body.senhaUser,
        confSenhaUser: req.body.confSenhaUser,
        createAt: new Date(),
        updateAT: new Date()
    });
    console.log(insere);
    res.send(JSON.stringify(value = 'Inclusao: ok'));
});

//Verifica os dados de login
app.post('/ValidarUsuario',async(req,res) => {
    let response = await usuario.findOne({where:{emailUser:req.body.emailUser}});
    console.log(response);
    if(response == null){
        res.send(JSON.stringify(value = 'erro'));
    }
    else{
        res.send(response);
    }
});

//Pega os dados para o perfil
app.post('/ConsultarUsuario',async(req,res) =>{
    let response = await usuario.findOne({where:{emailUser:req.body.emailUser}});
    res.send(response);
})

//aleteração do usuario(perfil)
app.post('/AlterarUsuario',async(req,res) => {
    let alterar = await usuario.update({       
        emailUser: req.body.emailUser,
        nomeUser: req.body.nomeUser,
        cpfUser: req.body.cpfUser,
        numTelUser: req.body.numTelUser,
        senhaUser: req.body.senhaUser,
        confSenhaUser: req.body.confSenhaUser,        
        updateAT: new Date()
        }, 
        {where: { id: req.body.id }}
    ); 
    console.log(alterar);   
    res.send(alterar);
})

//exclusão do usuario(perfil)
app.post('/ExcluirUsuario', async(req,res) => {
    let excluir = await usuario.destroy({
        where: { id: req.body.id }
    });    
})

//------------------------------------Armas e Munições----------------------------------------------------

app.post('/InserirArma',async(req,res) => {
    let insere = await iten.create({
        nomeIt: req.body.nomeIt,
        desIt: req.body.desIt,
        anoComIt: req.body.anoComIt,
        desAquiIt: req.body.desAquiIt,
        desNacIt: req.body.desNacIt,
        condIt: req.body.condIt,
        precoIt: req.body.precoIt,
        cadUserId: req.body.cadUserId,
        createAt: new Date(),
        updateAT: new Date()
    });
    console.log(insere);
    res.send(insere);
})

//------------------------------------Itens de Proteção----------------------------------------------------

app.post('/InserirItem',async(req,res) => {
    let insere = await protecao.create({
        nomeIt: req.body.nomeIt,
        desIt: req.body.desIt,
        anoComIt: req.body.anoComIt,
        desAquiIt: req.body.desAquiIt,
        desNacIt: req.body.desNacIt,
        condIt: req.body.condIt,
        precoIt: req.body.precoIt,
        cadUserId: req.body.cadUserId,
        createAt: new Date(),
        updateAT: new Date()
    });
    console.log(insere);
    res.send(insere);
})

//------------------------------------Itens de Proteção----------------------------------------------------

app.post('/InserirLocal',async(req,res) => {
    let insere = await loc.create({
        nomeLoc: req.body.nomeLoc,
        desLoc: req.body.desLoc,
        cidLoc: req.body.cidLoc,
        endLoc: req.body.endLoc,
        numTelLoc: req.body.numTelLoc,
        valAluLoc: req.body.valAluLoc,        
        cadUserId: req.body.cadUserId,
        createAt: new Date(),
        updateAT: new Date()
    });
    console.log(insere);
    res.send(insere);
})

//----------------------------FlatList Armu-----------------------------------------------

/* app.post('/ListaItens',async(req,res) => {
    let response = await iten.findAll(); 
    console.log(response);
    res.send(response);    
}); */

app.post('/ListaItens',async(req,res) => {
    let response = await iten.findAll({attributes: ['id', 'nomeIt', 'desIt', 'anoComIt', 'desAquiIt', 'desNacIt', 'condIt', 'precoIt' ]}); 
    console.log(response);
    res.send(response);    
});


//----------------------------------------------------------------------------------------

//Chamada para Inserir dados

//inserir cliente
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

//geral usuario
app.get('/consulta',async(req,res)=>{
    let consulta = await usuario.findAll();
    res.send(consulta);
});

//geral iten
app.get('/consultaI',async(req,res)=>{
    let consulta = await protecao.findAll();
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

//Chamada Exclusão

app.get('/excluir',async(req,res)=>{
    let excluir = await usuario.destroy({
       where: { id: 7 } 
    });
    res.send("Dado excluido");
});

//Fim Exclusão

app.get('/',(req,res) => {
    res.send('Servidor back-end funcionando');
})

let port = process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor ON');
})


