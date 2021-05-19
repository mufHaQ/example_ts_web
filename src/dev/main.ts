// Imports
import express from 'express'
import Server from './server'
import routes from './route'

const app = express()

new Server(8001, "localhost", app)

app.use(routes)

// Export
export {
    app,
    express
}