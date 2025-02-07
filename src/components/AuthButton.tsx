import React from 'react';
import { LogIn, LogOut } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export const AuthButton = () => {
  const { isAuthenticated, user, logout } = useAuthStore();

  const handleGoogleLogin = () => {
    // Initialize Google OAuth flow
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    const redirectUri = `${window.location.origin}/auth/callback`;
    const scope = 'email profile';
    
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
    
    window.location.href = authUrl;
  };

  if (isAuthenticated && user) {
    return (
      <div className="flex items-center space-x-4">
        <img
          src={user.image || 'https://via.placeholder.com/32'}
          alt={user.name}
          className="w-8 h-8 rounded-full"
        />
        <button
          onClick={logout}
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={handleGoogleLogin}
      className="flex items-center space-x-2 bg-white text-gray-700 px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
    >
      <img
        src="https://www.google.com/favicon.ico"
        alt="Google"
        className="w-5 h-5"
      />
      <span>Sign in with Google</span>
    </button>
  );
};