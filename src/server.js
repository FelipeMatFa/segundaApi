// importar o pacote do express
const express = require('express')

// instanciar o express na variavel app
const app = express();

// definir porta do servidor em uma variavel
const PORT = 3008;

// testar a api com a função listen
app.listen(PORT, () => console.log(`Running at port ${PORT}`))