import React, { createContext, useContext, useState, useEffect } from 'react';
import { setCookie, getCookie, deleteCookie } from '../utils/cookies';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'employer';
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Static user credentials for demo
const DEMO_USER = {
  id: '1',
  email: 'demo@example.com',
  password: 'password123',
  name: 'Demo User',
  role: 'user' as const,
  avatar: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=150'
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = getCookie('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing user data:', error);
        deleteCookie('user');
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));

    if (email === DEMO_USER.email && password === DEMO_USER.password) {
      const userData = { ...DEMO_USER };
      delete (userData as any).password;
      
      // Set cookie with 24-hour expiry
      setCookie('user', JSON.stringify(userData), 1);
      setUser(userData);
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    deleteCookie('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};