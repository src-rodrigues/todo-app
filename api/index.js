const express = require('express');
const rotaTarefa = require('./rotas/tarefa');
const app = express();

// app.use(bodyParser.json());
app.use(express.json());

app.use('/api/tarefa', rotaTarefa);

app.listen(3000, _ => {
  console.log('ToDo App API em execução...');
});
