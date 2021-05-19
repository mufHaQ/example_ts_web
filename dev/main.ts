// Imports
// npm/yarn Package
import express from 'express'
import dotenv from 'dotenv'
// My Module
import Server from './server'
import routes from './route'


// dotenv
dotenv.config()


// Express
const app = express()
app.use(routes)


// server.ts
new Server(process.env.PORT, "localhost", app)


// Export
export {
    app,
    express
}