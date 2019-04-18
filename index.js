const express = require('express')
const redis = require('redis')

const app = express()
const redis = redis.createClient()

redis.set('visitas', 0)

app.get('/', (req, res) => {
  redis.get('visitas', (err, visitas) => {
    res.send(`Visitas: ${visitas}`)
    redis.set('visitas', parseInt(visitas) + 1)
  })
})

app.listen(8080, () => {
  console.log(`Listening on port 8080.`)
})