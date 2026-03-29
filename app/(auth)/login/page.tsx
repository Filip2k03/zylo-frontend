"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [loginData, setLoginData] = useState({ id: "", password: "" });
  const [error, setError] = useState("");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!loginData.id || !loginData.password) {
      setError("Please enter your username/email and password.");
      return;
    }

    // TODO: Replace with real API call to your PHP backend
    // const response = await fetch('https://your-domain.com/api/users/login', { ... });
    
    // Simulating successful login routing
    router.push("/feed");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white font-sans selection:bg-purple-500/30 overflow-x-hidden">
      <main className="max-w-md mx-auto min-h-screen flex flex-col justify-center relative px-4">
        <div className="w-full animate-in slide-in-from-bottom-4 duration-300">
          
          <Link href="/" className="absolute top-6 left-4 text-gray-400 hover:text-white flex items-center transition">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back
          </Link>
          
          <h2 className="text-3xl font-bold mb-6 mt-12">Welcome back.</h2>
          
          {error && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-xl mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <input 
              type="text" 
              placeholder="Username or Email" 
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-purple-500 transition-colors" 
              value={loginData.id} 
              onChange={(e) => setLoginData({...loginData, id: e.target.value})} 
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-purple-500 transition-colors" 
              value={loginData.password} 
              onChange={(e) => setLoginData({...loginData, password: e.target.value})} 
            />
            <button 
              type="submit" 
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl mt-4 shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              Log In
            </button>
          </form>

        </div>
      </main>
    </div>
  );
}