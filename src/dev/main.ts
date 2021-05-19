// Imports
import express from 'express'
import Server from './server'

const app = express()

const server = new Server(8001, "localhost", app)
server.run()