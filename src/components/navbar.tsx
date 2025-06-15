import Link from "next/link";
import { Brain } from "lucide-react";

export default async function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-emerald-400">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-xl font-bold text-transparent">
              PromptMotion
            </span>
          </div>
          <div className="hidden space-x-8 md:flex">
            <a
              href="#features"
              className="text-gray-300 transition-colors hover:text-white"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-300 transition-colors hover:text-white"
            >
              How It Works
            </a>
            <a
              href="#beta"
              className="text-gray-300 transition-colors hover:text-white"
            >
              Beta
            </a>
          </div>
          <button className="transform rounded-lg bg-gradient-to-r from-purple-600 to-emerald-500 px-4 py-2 font-medium transition-all hover:scale-105 hover:from-purple-700 hover:to-emerald-600">
            Join Beta
          </button>
        </div>
      </div>
    </nav>
  );
}
