import path from 'node:path'
import dotenv from 'dotenv'
import { z } from 'zod'
console.log(process.cwd())
dotenv.config({
    path: path.resolve(process.cwd(), '../../.env'),
})

const envSchema = z.object({
    NODE_ENV: z
        .enum(['development', 'test', 'production'])
        .default('development'),
    API_PORT: z.coerce.number().default(3000),
    DATABASE_URL: z.string(),
    REDIS_HOST: z.string().default('localhost'),
    REDIS_PORT: z.coerce.number().default(6379),
    UPLOAD_DIRECTORY: z.string().default('storage/original'),
    OPTIMIZED_DIRECTORY: z.string().default('storage/optimized'),
})

const result = envSchema.safeParse(process.env)

if (!result.success) {
    console.error('Invalid environment variables:')
    console.error(result.error.issues)
    process.exit(1)
}

export const env = {
    nodeEnv: result.data.NODE_ENV,
    apiPort: result.data.API_PORT,
    databaseUrl: result.data.DATABASE_URL,
    redisHost: result.data.REDIS_HOST,
    redisPort: result.data.REDIS_PORT,
    uploadDirectory: result.data.UPLOAD_DIRECTORY,
    optimizedDirectory: result.data.OPTIMIZED_DIRECTORY,
} as const
