const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.connect('mongodb+srv://admin:yuri2506@clusterm-bymv8.mongodb.net/test?retryWrites=true&w=majority', 
{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

require('./src/models/Product')

app.use('/api', require('./src/routes'))

app.listen(3001);