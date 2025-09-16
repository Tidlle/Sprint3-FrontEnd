import { AppRoutes } from './routes/AppRoutes'
import { Header } from './components/Header'
import { NavBottom } from './components/NavBottom'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-app">
      <Header />
      <main className="flex-1 container-app py-6 pb-24">
        <AppRoutes />
      </main>
      <NavBottom />
    </div>
  )
}
