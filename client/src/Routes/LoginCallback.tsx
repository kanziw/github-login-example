import axios from 'axios'
import { useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

export const LoginCallback = () => {
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')

  console.log('location', JSON.stringify(location, null, 2))
  searchParams.forEach((value, key) => {
    console.log(`searchParam.get('${key}')] -> ${value}`)
  })

  if (code) {
    useEffect(() => {
      axios.post('http://localhost:4000/signUpOrLogIn', { code })
        .then(({ data }) => {
          console.log('', data)
        })
    }, [code])
  }

  return <h1>LOGIN_CALLBACK</h1>
}
