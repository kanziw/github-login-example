import { Octokit } from '@octokit/rest'
import bodyParser from 'body-parser'
import cors from 'cors'
import * as dotenv from 'dotenv-safe'
import Express from 'express'
import got from 'got'
import morgan from 'morgan'

dotenv.config()

const GITHUB_APP_CLIENT_ID = 'Iv1.9eb8236ce02df794'
const GITHUB_APP_PRIVATE_KEY = process.env.GITHUB_APP_PRIVATE_KEY as string

const app = Express()

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

app.post('/signUpOrLogIn', async(req, res) => {
  const { code } = req.body
  const query = `client_id=${GITHUB_APP_CLIENT_ID}&client_secret=${GITHUB_APP_PRIVATE_KEY}&code=${code}`

  try {
    const { access_token: auth } = await got.post<{access_token: string}>(`https://github.com/login/oauth/access_token?${query}`, {
      responseType: 'json',
      resolveBodyOnly: true,
    })
    if (!auth) {
      throw new Error('failed to get access token')
    }

    const octokit = new Octokit({ auth })

    const resp = await octokit.users.getAuthenticated()
    if (resp.status !== 200) {
      console.log('failed to get authenticated user', JSON.stringify(resp, null, 2))
      throw new Error('failed to get user')
    }
    const { login: username, avatar_url: profileImageUrl, name, email } = resp.data

    res.json({ name, email, username, profileImageUrl })
  } catch (err: unknown) {
    console.log(err)
    res.status(500).end()
  }
})

app.listen(4000, () => {
  console.log('Server listening on port 3000!')
})
