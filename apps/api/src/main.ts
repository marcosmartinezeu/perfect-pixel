import { createApp } from './app'
import { env } from './shared/infrastructure/config/env'

async function bootstrap(): Promise<void> {
    const app = await createApp()
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
