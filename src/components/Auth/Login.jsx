import React, { useState } from 'react'
import { Eye, EyeOff, Lock, Mail, FileText, ArrowRight } from 'lucide-react';

const Login = ({handlelogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const submithandler = (event) => {
    event.preventDefault();
    handlelogin(email, password);
    setEmail("");
    setPassword("");
  }

  return (
    <div className='h-screen w-screen flex items-center justify-center bg-[#0a1628] relative overflow-hidden'>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      
      <div className='relative z-10 w-full max-w-lg px-6'>
     
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl mb-6 shadow-lg shadow-blue-500/50">
            <FileText className="w-10 h-10 text-white" strokeWidth={2.5} />
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">
            Employee Portal
          </h1>
          <p className="text-slate-400 text-base font-light">
            Management System Access
          </p>
        </div>

      
        <form onSubmit={(event) => {
          submithandler(event)
        }} className="space-y-6">
         
          <div>
            <label htmlFor="email" className="block text-white text-base font-medium mb-3">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                <Mail className="w-5 h-5" />
              </div>
              <input 
                id="email"
                type="email" 
                placeholder='your.email@company.com'
                required
                className='w-full outline-none bg-[#0f1f35] border border-slate-700/50 font-normal text-base py-4 pl-12 pr-4 rounded-xl placeholder:text-slate-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200' 
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
            </div>
          </div>

         
          <div>
            <label htmlFor="password" className="block text-white text-base font-medium mb-3">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                <Lock className="w-5 h-5" />
              </div>
              <input 
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter your password'
                required
                className='w-full outline-none bg-[#0f1f35] border border-slate-700/50 font-normal text-base py-4 pl-12 pr-12 rounded-xl placeholder:text-slate-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200'
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-slate-300 transition-colors duration-200"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

        
          <div className="flex items-center justify-between pt-2">
            <label className="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-5 h-5 rounded border-2 border-slate-600 bg-transparent checked:bg-blue-500 checked:border-blue-500 focus:ring-2 focus:ring-blue-500/50 cursor-pointer transition-all duration-200"
              />
              <span className="ml-3 text-base text-slate-300 group-hover:text-white transition-colors duration-200">
                Remember me
              </span>
            </label>
            <button
              type="button"
              className="text-base text-blue-400 hover:text-blue-300 transition-colors duration-200 font-normal"
            >
              Forgot password?
            </button>
          </div>

          <button 
            type="submit"
            className='mt-8 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold py-4 rounded-xl hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 flex items-center justify-center group'
          >
            Sign In
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </form>

      
        <div className="text-center mt-8">
          <p className="text-slate-400 text-base mb-4">
            Need access?
          </p>
          <p className="text-slate-400 text-base">
            Don't have an account?{' '}
            <button
              type="button"
              className="text-blue-400 hover:text-blue-300 font-normal transition-colors duration-200"
            >
              Contact Administrator
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login;



  