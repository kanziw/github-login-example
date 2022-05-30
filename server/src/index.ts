import bodyParser from 'body-parser'
import cors from 'cors'
import * as dotenv from 'dotenv-safe'
import Express from 'express'
import morgan from 'morgan'

dotenv.config()

const GITHUB_APP_PRIVATE_KEY = process.env.GITHUB_APP_PRIVATE_KEY as string

const app = Express()

app.use(cors())
app.use(bodyParser.json())

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/signUpOrLogIn', (req, res) => {
  res.json({ ok: 1, body: req.body })
})

app.listen(4000, () => {
  console.log('Server listening on port 3000!')
})
