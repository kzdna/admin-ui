import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
          
          {/* Bagian kiri (gambar placeholder) -> hilang di HP */}
          <div className="hidden md:flex md:w-1/2 items-center justify-center bg-gray-300">
            <span className="text-gray-600 text-2xl">600 × 500</span>
          </div>
          
          {/* Bagian kanan (form login) */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
            
            <form>
              {/* Email */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Masukkan email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md 
                             shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 
                             focus:border-blue-500 sm:text-sm"
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Masukkan password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md 
                             shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 
                             focus:border-blue-500 sm:text-sm"
                />
              </div>

              {/* Tombol Login */}
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md 
                           hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
