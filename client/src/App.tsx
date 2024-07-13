import { useState } from 'react'
import HomeLayout from './pages/HomeLayout'
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthenticationLayout from './features/user-authentication/pages/AuthenticationLayout'
import LoginPage from './features/user-authentication/pages/LoginPage'
import RegisterPage from './features/user-authentication/pages/RegisterPage'
import DashboardLayout from './features/dashboard/pages/DashboardLayout'
import DashboardPage from './features/dashboard/pages/DashboardPage'
import ForumLayout from './features/forum/pages/ForumLayout'
import ForumPage from './features/forum/pages/ForumPage'
import ForumSubPage from './features/forum/pages/ForumSubPage'
import GoalsLayout from './features/goals/pages/GoalsLayout'
import GoalsPage from './features/goals/pages/GoalsPage'

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
      <Route path="/forum" element={<ForumLayout>
        <ForumPage/>
      </ForumLayout>} />
      <Route path="/forum/:id" element={<ForumLayout>
        <ForumSubPage/>
      </ForumLayout>} />
      <Route path="/goals" element={<GoalsLayout>
        <GoalsPage/>
      </GoalsLayout>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
