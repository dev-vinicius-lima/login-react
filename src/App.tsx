import { LoginForm } from './components/forms/LoginForm'
export function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg bg-sky-500">
      <div className="bg-white rounded-md shadow-md p-6 flex-1 max-w-96">
        <h1 className="font-bold text-3xl text-center mb-3">Login React 🔐</h1>
        <LoginForm />
      </div>
    </div>
  )
}
