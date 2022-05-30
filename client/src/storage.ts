type UserProfile = {
  name: string,
  email: string,
  username: string,
  profileImageUrl: string,
}

export const userStorage = () => {
  return {
    set(profile: UserProfile) {
      window.localStorage.setItem('userProfile', JSON.stringify(profile))
    },
    get(): UserProfile | null {
      const userProfile = window.localStorage.getItem('userProfile')
      return userProfile ? JSON.parse(userProfile) : null
    },
  }
}
