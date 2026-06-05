import Fastify, { FastifyInstance } from 'fastify'

import { registerHealthRoutes } from '@/health/infrastructure/http/health-route'

export async function createApp(): Promise<FastifyInstance> {
    const app = Fastify({
        logger: true,
    })

    await registerHealthRoutes(app)

    return app
}
