import { Redis } from '@upstash/redis'

export const redis = new Redis({
    url: 'https://tough-silkworm-33686.upstash.io',
    token: process.env.REDIS_KEY!,
})