import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './features/user-authentication/pages/LoginPage'
import RegisterPage from './features/user-authentication/pages/RegisterPage'
import DashboardPage from './features/dashboard/pages/DashboardPage'
import ForumPage from './features/forum/pages/ForumPage'
import ForumSubPage from './features/forum/pages/ForumSubPage'
import GoalsPage from './features/goals/pages/GoalsPage'
import PrivateOutlet from './components/authentication/PrivateOutlet'
import PublicOutlet from './components/authentication/PublicOutlet'

function App() {

  return (
    <Routes>
      <Route path="/*" element={<PublicOutlet />}>
        <Route path="" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      <Route path="/*" element={<PrivateOutlet />}>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="forum" element={<ForumPage />} />
        <Route path="forum/:id" element={<ForumSubPage />} />
        <Route path="goals" element={<GoalsPage />} />
      </Route>
    </Routes>
  )
}

export default App
