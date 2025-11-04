import React from 'react';
import { LogOut } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
  userName?: string;
  onLogout?: () => void;
}

export function Navbar({ onNavigate, currentPage, userName, onLogout }: NavbarProps) {
  const isLoggedIn = !!userName;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => onNavigate?.(isLoggedIn ? 'dashboard' : 'home')}
        >
          <span className="text-3xl">🥑</span>
          <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
            Nutritionary
          </span>
        </div>

        <div className="flex items-center gap-6">
          {!isLoggedIn ? (
            <>
              <button onClick={() => onNavigate?.('home')} className="text-gray-700 hover:text-teal-600 transition-colors">
                About
              </button>
              <button onClick={() => onNavigate?.('home')} className="text-gray-700 hover:text-teal-600 transition-colors">
                Contact
              </button>
              <button
                onClick={() => onNavigate?.('auth')}
                className="px-5 py-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-full hover:shadow-lg transition-all"
              >
                Login
              </button>
            </>
          ) : (
            <>
              <button onClick={() => onNavigate?.('dashboard')} className="text-gray-700 hover:text-teal-600 transition-colors">
                Dashboard
              </button>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-emerald-400 flex items-center justify-center text-white">
                    {userName?.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-gray-700">{userName}</span>
                </div>
                <button
                  onClick={onLogout}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500 to-red-500 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
