const express = require('express')
const basicAuth = require('express-basic-auth')
const mariadb = require('mariadb')

console.log('starting appjs')

const app = express()
const pool = mariadb.createPool({
  host: 'db',
  user: 'admin',
  password: 'itacirgabral',
  database: 'banco',
  connectionLimit: 5
})

app.use(basicAuth({
  users: { 'admin': 'itacirgabral' },
  challenge: true,
}))

app.use(express.static(__dirname + '/public'))

app.get('/consultabanco', (req, res) => {
  pool.query('SELECT * FROM banco.tabela')
    .then(data => {
      res.send(data)
    })
    .catch(console.error)
})

app.listen(8080, () => {
  console.log('appjs started')
})