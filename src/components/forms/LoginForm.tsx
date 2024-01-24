import { FormEvent, useState } from 'react'

export function LoginForm() {
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [showPasswordInput, setShowPassword] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!emailInput || !passwordInput) return
    alert('Usuário logado com sucesso!')
  }
  return (
    <form className="grid gap-9" onSubmit={handleSubmit}>
      <div className="grid gap-6">
        <div className="space-y-2 grid">
          <label htmlFor="email">Email</label>
          <input
            value={emailInput}
            type="email"
            name="email"
            id="email"
            placeholder="exemple@hotmail.com"
            onChange={(e) => setEmailInput(e.target.value)}
            className="h-10 px-3 outline-none ring-0 focus-visible:ring-2 focus-visible:ring-sky-700 ring-offset-2 ring-offset-gray-300 rounded-md"
          />
        </div>
        <div className="space-y-2 grid">
          <label htmlFor="password">Password</label>
          <div className="relative">
            <input
              value={passwordInput}
              type={showPasswordInput ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="*********"
              onChange={(e) => setPasswordInput(e.target.value)}
              className="h-10 block pl-3 pr-10 w-full px-3 outline-none ring-0 focus-visible:ring-2 focus-visible:ring-sky-700 ring-offset-2 ring-offset-gray-300 rounded-md"
            />
            <button
              type="button"
              className="absolute right-2 top-2"
              onClick={() => setShowPassword(!showPasswordInput)}
            >
              {showPasswordInput ? '🫣' : '👁️'}
            </button>
          </div>
        </div>
      </div>

      <button className="bg-sky-500 text-white rounded-md h-9 uppercase font-medium transition-colors hover:bg-sky-600 ">
        Login
      </button>
    </form>
  )
}
