const express = require('express')
const redis = require('redis')

const app = express()
const redisClient = redis.createClient({
  host: 'redis',
  port: 6379
})

redisClient.set('visitas', 0)

app.get('/', (req, res) => {
  redisClient.get('visitas', (err, visitas) => {
    res.send(`Visitas: ${visitas}`)
    redisClient.set('visitas', parseInt(visitas) + 1)
  })
})

app.listen(process.env.PORT || 8080, () => {
  console.log(`Listening on port 8080.`)
})