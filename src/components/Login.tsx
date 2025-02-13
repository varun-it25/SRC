import useAuth from "@/hooks/useAuth";

const Login = () => {
  const { error, handleLogin, email, setEmail, password, setPassword, loading } = useAuth();  

  return (
    <div className="w-screen bg-zinc-100 h-screen p-8 flex flex-col justify-center items-center">
        <div className="w-80 sm:w-96 bg-white p-6 rounded-lg shadow-xl">
          <h2 className="text-xl font-semibold mb-4">SRC Login</h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium pb-1">Email</label>
              <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-2 bg-white border border-gray-300 rounded-md" placeholder="Enter your email" />
            </div>
            <div className="">
              <label htmlFor="password" className="block text-sm font-medium pb-1">Password</label>
              <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full bg-white p-2 border border-gray-300 rounded-md" placeholder="Enter your password" />
            </div>
            <button type="submit" disabled={loading} className={`w-full py-2 rounded-md ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} text-white font-semibold`}>
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
  )
}

export default Login