import Redis from "ioredis";

const redisClient = new Redis({
    'port': 55000,
    'host': 'localhost',
    'username': 'default',
    'password':'redispw'
})

export default redisClient;