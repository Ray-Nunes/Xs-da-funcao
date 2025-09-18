const express = require('express');
const cors = require('cors');
const equationRoutes = require('./src/router/equationRoutes')

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({message: 'Servidor funcionando'})
});

app.use('/', equationRoutes)

app.listen(PORT, () => {
    console.log(`Servidor rodando ma porta ${PORT}`)
})