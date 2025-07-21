import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ChatAI from './pages/ChatAI';
import Diagnosis from './pages/Diagnosis';
import Learning from './pages/Learning';
import Subscription from './pages/Subscription';
import { AuthProvider, useAuth } from './firebase/AuthContext';
import './App.css';

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/chat" element={<PrivateRoute><ChatAI /></PrivateRoute>} />
          <Route path="/diagnosis" element={<PrivateRoute><Diagnosis /></PrivateRoute>} />
          <Route path="/learning" element={<PrivateRoute><Learning /></PrivateRoute>} />
          <Route path="/subscription" element={<PrivateRoute><Subscription /></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
