import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { userStorage } from '../storage'

export const Home = () => {
  const navigate = useNavigate()

  const user = userStorage().get()
  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user])

  return user
    ? (
    <>
      <div> @{user.username} </div>
      <div> name: {user.name} </div>
      <div> email: {user.email} </div>
      <div> <img src={user.profileImageUrl} /> </div>
    </>
      )
    : null
}
