const express = require('express')
const mongoose=require('mongoose')
const routes = require('./routes');

const app= express();
mongoose.connect('mongodb+srv://melquias:melquias@cluster0-aa5sf.mongodb.net/localdev?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

app.use(routes);
app.use(express.json());


app.listen(3333);