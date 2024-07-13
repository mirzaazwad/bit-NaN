import { useState } from 'react'
import HomeLayout from './pages/HomeLayout'
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthenticationLayout from './features/user-authentication/pages/AuthenticationLayout'
import LoginPage from './features/user-authentication/pages/LoginPage'
import RegisterPage from './features/user-authentication/pages/RegisterPage'
import DashboardLayout from './features/dashboard/pages/DashboardLayout'
import DashboardPage from './features/dashboard/pages/DashboardPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout>
        <HomePage/>
      </HomeLayout>} />
      <Route path="/login" element={<AuthenticationLayout>
        <LoginPage/>
      </AuthenticationLayout>} />
      <Route path="/register" element={<AuthenticationLayout>
        <RegisterPage/>
      </AuthenticationLayout>} />
      <Route path="/dashboard" element={<DashboardLayout>
        <DashboardPage/>
      </DashboardLayout>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
