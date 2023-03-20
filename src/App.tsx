import { AuthProvider } from '@src/contexts/AuthContext'
import AppRoutes from './routes/AppRoutes'
import './css/_index.scss'

const App = () => (
  <AuthProvider>
    <AppRoutes />
  </AuthProvider>
)

export default App
