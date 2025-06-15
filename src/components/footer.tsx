// import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  LinkedinIcon,
  Mail,
  MessageCircle,
  Twitter,
  TwitterIcon,
} from "lucide-react";

export default async function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 flex items-center space-x-2 md:mb-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-emerald-400">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-xl font-bold text-transparent">
              PromptMotion
            </span>
          </div>

          <div className="mb-6 flex space-x-6 md:mb-0">
            <a
              href="mailto:hello@promptmotion.ai"
              className="flex items-center text-gray-400 transition-colors hover:text-white"
            >
              <Mail className="mr-2 h-5 w-5" />
              hello@promptmotion.ai
            </a>
            <a
              href="#"
              className="flex items-center text-gray-400 transition-colors hover:text-white"
            >
              <Twitter className="mr-2 h-5 w-5" />
              @PromptMotion
            </a>
            <a
              href="#"
              className="flex items-center text-gray-400 transition-colors hover:text-white"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Discord
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 PromptMotion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
