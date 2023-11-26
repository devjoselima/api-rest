import { FastifyInstance } from 'fastify'
import { knex } from '../database'

export async function transactionRoutes(app: FastifyInstance) {
    app.get('/hello', async () => {
        const transaction = await knex('transactions').select('*')

        return transaction
    })
}
