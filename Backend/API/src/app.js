import express from 'express'
import morgan from 'morgan'

import {createRoles} from "./libs/initialSetup";

import workersRoutes from "./routes/workersRoutes";
import authRoutes from "./routes/authRoutes";
import usersRoutes from "./routes/usersRoutes";

const app = express()
createRoles();

const port = 4000

app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => {
    res.json('Hello World!')
  });

app.use('/api/workers', workersRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)

module.exports = {app, port}