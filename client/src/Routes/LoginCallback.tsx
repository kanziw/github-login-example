import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { userStorage } from '../storage'

export const LoginCallback = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const code = searchParams.get('code')

  useEffect(() => {
    if (code) {
      axios.post('http://localhost:4000/signUpOrLogIn', { code })
        .then(({ data }) => {
          userStorage().set(data)
          navigate('/')
        })
    }
  }, [code])

  return <h1>...Loading</h1>
}
