import express from 'express';
import { environ } from './utils';
export const app = express();

/**
 * Middleware to enable some logging
 */
app.use((req, res, next) => {
    if (environ('NODE_ENV', 'no').toUpperCase() !== 'TEST') console.log(`${new Date().toUTCString()}: ${req.method.toUpperCase()} ${req.url} - ${req.ip}`)
    next()
})

app.get('/', ( req, res) => {
    res.status(200).send('Hello World')
})
