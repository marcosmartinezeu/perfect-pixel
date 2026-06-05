import { createApp } from './app'
import { env } from './shared/infrastructure/config/env'
import { prisma } from '@repo/database'

async function bootstrap(): Promise<void> {
    const app = await createApp()

    console.log('count', await prisma.image.count());

    await app.listen({
        port: env.apiPort,
        host: '0.0.0.0',
    })

    console.log(`API started on port ${env.apiPort}`)
}

bootstrap().catch((error) => {
    console.error(error)
    process.exit(1)
})
