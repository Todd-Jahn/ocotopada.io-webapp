import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Import Components
import LandingPage from './components/layout/LandingPage';
import AuthPage from './components/auth/AuthPage';
import Dashboard from './components/profile/Dashboard';
import AvatarCreation from './components/character/AvatarCreation';
import PaymentPage from './components/payment/PaymentPage';
import ChatInterface from './components/chat/ChatInterface';
import ProfilePage from './components/profile/ProfilePage';
import LoadingScreen from './components/LoadingScreen';
import TeamStoryPage from './components/layout/TeamStoryPage';

// Context for global state
export const AppContext = React.createContext();

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  // Check for existing user session on app load
  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const token = localStorage.getItem('octopada_token');
        const userData = localStorage.getItem('octopada_user');
        
        if (token && userData) {
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error('Session check failed:', error);
        localStorage.removeItem('octopada_token');
        localStorage.removeItem('octopada_user');
      } finally {
        setLoading(false);
      }
    };

    checkUserSession();
  }, []);

  // Global context value
  const contextValue = {
    user,
    setUser,
    theme,
    setTheme,
    logout: () => {
      localStorage.removeItem('octopada_token');
      localStorage.removeItem('octopada_user');
      setUser(null);
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <AppContext.Provider value={contextValue}>
      <Router>
        <div className="App">
          <Routes>
            {/* Public Routes */}
            <Route 
              path="/" 
              element={user ? <Navigate to="/dashboard" /> : <LandingPage />} 
            />
            <Route 
              path="/auth" 
              element={user ? <Navigate to="/dashboard" /> : <AuthPage />} 
            />
            <Route 
              path="/team-story" 
              element={<TeamStoryPage />} 
            />
            
            {/* Protected Routes */}
            <Route 
              path="/dashboard" 
              element={user ? <Dashboard /> : <Navigate to="/auth" />} 
            />
            <Route 
              path="/avatar" 
              element={user ? <AvatarCreation /> : <Navigate to="/auth" />} 
            />
            <Route 
              path="/payment" 
              element={user ? <PaymentPage /> : <Navigate to="/auth" />} 
            />
            <Route 
              path="/chat/:companionId?" 
              element={user ? <ChatInterface /> : <Navigate to="/auth" />} 
            />
            <Route 
              path="/profile" 
              element={user ? <ProfilePage /> : <Navigate to="/auth" />} 
            />
            
            {/* Payment Success/Cancel Routes */}
            <Route 
              path="/payment/success" 
              element={user ? <PaymentPage success={true} /> : <Navigate to="/auth" />} 
            />
            <Route 
              path="/payment/cancel" 
              element={user ? <PaymentPage cancel={true} /> : <Navigate to="/auth" />} 
            />
            
            {/* 404 Route */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;