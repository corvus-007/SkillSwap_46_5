import './App.css'
import { AppHeader } from './components/app-footer/AppHeader.tsx'
import { AppFooter } from './components/app-header/AppFooter.tsx'
import { NavLink, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home-page/HomePage.tsx'
import { LoginPage } from './pages/login-page/LoginPage.tsx'

function App() {
  return (
    <>
      <AppHeader />
      {/*Проверка навигации*/}
      <NavLink to={'/'}>Главная</NavLink>
      <NavLink to={'/login'}>Логин</NavLink>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
      <AppFooter />
    </>
  )
}

export default App
