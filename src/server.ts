import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'

const app = fastify()
// GET, POST PUT, PATCH, DELETE

app.get('/hello', async () => {
  const transactions = await knex('transactions').select('*')
  return transactions
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
