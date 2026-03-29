import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white font-sans selection:bg-purple-500/30 overflow-x-hidden">
      <main className="max-w-md mx-auto min-h-screen relative flex flex-col justify-center px-4">
        <div className="flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-500">
          
          <div className="w-24 h-24 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-3xl rotate-12 flex items-center justify-center shadow-2xl mb-4">
            <Sparkles className="w-12 h-12 text-white" />
          </div>
          
          <div className="text-center space-y-2">
            <h1 className="text-6xl font-black tracking-tighter">ZYLO</h1>
            <p className="text-gray-400 font-medium">Your vibe. Your rules.</p>
          </div>
          
          <div className="w-full space-y-4 mt-8">
            <Link 
              href="/register" 
              className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:scale-[1.02] transition-transform shadow-lg flex justify-center"
            >
              Create Account
            </Link>
            
            <Link 
              href="/login" 
              className="w-full py-4 bg-white/10 backdrop-blur-md font-bold rounded-2xl border border-white/10 hover:bg-white/20 transition-all flex justify-center"
            >
              Log In
            </Link>
          </div>
          
        </div>
      </main>
    </div>
  );
}