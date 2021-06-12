const express = require('express')
const path = require('path');

const app = express();


app.use(express.static(path.resolve(__dirname, '../client')));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../client/src/index.html'))
);

app.use((req, res) => {
  console.log('hit')
  res.sendStatus(404)
})

app.listen(3001, () => {
  console.log('server started')
})