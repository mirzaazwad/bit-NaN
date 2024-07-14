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
import Error404 from './components/error/error404'
import Error500 from './components/error/error500'
import Error401 from './components/error/error401'
import Error403 from './components/error/error403'
import LogOut from './features/user-authentication/pages/LogOut'
import {Suspense, lazy } from 'react'
import 'rsuite/dist/rsuite.min.css';
const ModalSelector = lazy(() => import('./components/ModalSelector'));

function App() {

  return (
    <>
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
          <Route path="logout" element={<LogOut />} />
        </Route>
        <Route path="/error404" element={<Error404 />} />
        <Route path="/error401" element={<Error401 />} />
        <Route path="/error403" element={<Error403 />} />
        <Route path="/error500" element={<Error500 />} />
      </Routes>
      <Suspense fallback={null}>
        <ModalSelector />
      </Suspense>
    </>
  )
}

export default App
