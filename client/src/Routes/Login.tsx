const GITHUB_CLIENT_ID = 'Iv1.9eb8236ce02df794'
const href = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user:email&redirect_uri=http://localhost:3000/login/callback`

export const Login = () => (
  <a href={href}>
    <h1>LOGIN</h1>
  </a>
)
