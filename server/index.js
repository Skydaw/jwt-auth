const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser= require('cookie-parser')

const userRoutes = require('./routes/user.routes')

// ajoute la connection dans un fichier séparé qui servira de module de connexion
mongoose.connect('mongodb://localhost/jwt_auth',{
    useNewUrlParser: true,
    useUnifiedTopology: true,},()=>{
    console.log('connected to MongoDB')
})

//Créer un fichier .env qui contient les variables d'environnement comme  l'URL
const app = express();
app.use(cookieParser())

app.use(cors({
    credentials:true,
    origin:['http://localhost:8000','http://localhost:3000','http://localhost:8080']
}))

app.use(express.json());
// Route
app.use('/api/user', userRoutes);



app.listen(8000);
