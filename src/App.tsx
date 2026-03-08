import { AppHeader } from './components/app-footer/AppHeader.tsx'
import { AppFooter } from './components/app-header/AppFooter.tsx'
import { NavLink, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home-page/HomePage.tsx'
import { LoginPage } from './pages/login-page/LoginPage.tsx'
import { fetchUsers } from './api/usersApi.ts'
import { useEffect, useState } from 'react'
import type { User } from './entities/user/user.types.ts'

function App() {
  const [users, setUsers] = useState<User[]>([])
  useEffect(() => {
    fetchUsers().then(setUsers)
  }, [])

  return (
    <>
      <AppHeader />
      {/*Проверка навигации*/}
      <NavLink to={'/'}>Главная</NavLink>
      <NavLink to={'/login'}>Логин</NavLink>

      <pre>{JSON.stringify(users, null, 2)}</pre>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
      <AppFooter />
    </>
  )
}

export default App
