const express = require('express');
const server = express();
const mysql = require('mysql');
const ejs = require('ejs');


const PORT = 9090;

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'jaune_congo'
})
  
connection.connect((err)=>{
    if(err) throw err
    console.log('connexion a mysql etablie');
})

server.set('views')
server.set('view engine', 'ejs');
server.use(express.static(__dirname + '/public'));



server.get('/produits',(req,res)=>{
    connection.query('select * from products', (erreur,resultat)=>{
    if(erreur) throw erreur;
    return res.render('produits/index', { produits : resultat});
    
    });
})

 server.get('/produits/:id',(req,res)=>{
    console.log("PARAM : ",req.params.id);
     connection.query(`select * from products where id=${parseInt(req.params.id)}`, (erreur,resultat)=>{
       if(erreur) throw erreur

       return res.render("produits/detail", { produit : resultat[0] })
     })
 })

server.listen(PORT, () => {
    console.log(`Le serveur tourne sur le port ${PORT}`);
})

