import { FastifyInstance } from "fastify";

export async function registerHealthRoutes(
    fastify: FastifyInstance,
): Promise<void> {
    fastify.get('/health', async () => {
        return {
            status: 'ok',
        }
    })
}
