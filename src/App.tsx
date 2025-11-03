import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { AuthPage } from './components/AuthPage';
import { Dashboard } from './components/Dashboard';
import { DiseasePage } from './components/DiseasePage';
import { WeightLossPage } from './components/WeightLossPage';
import { WeightGainPage } from './components/WeightGainPage';

type Page = 'home' | 'auth' | 'dashboard' | 'disease' | 'weightloss' | 'weightgain';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [userName, setUserName] = useState<string>('');

  const handleLogin = (name: string) => {
    setUserName(name);
    setCurrentPage('dashboard');
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const handleLogout = () => {
    setUserName('');
    setCurrentPage('home');
  };

  return (
    <div className="min-h-screen">
      <Navbar
        onNavigate={handleNavigate}
        currentPage={currentPage}
        userName={userName}
        onLogout={handleLogout}
      />

      {currentPage === 'home' && (
        <HomePage onGetStarted={() => setCurrentPage('auth')} />
      )}

      {currentPage === 'auth' && (
        <AuthPage onLogin={handleLogin} />
      )}

      {currentPage === 'dashboard' && (
        <Dashboard userName={userName} onNavigate={handleNavigate} />
      )}

      {currentPage === 'disease' && (
        <DiseasePage onBack={() => setCurrentPage('dashboard')} />
      )}

      {currentPage === 'weightloss' && (
        <WeightLossPage onBack={() => setCurrentPage('dashboard')} />
      )}

      {currentPage === 'weightgain' && (
        <WeightGainPage onBack={() => setCurrentPage('dashboard')} />
      )}
    </div>
  );
}
