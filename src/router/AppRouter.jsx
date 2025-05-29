import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import { AuthProvider } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import Products from '../pages/Products'; 
import ProtectedRoute from './ProtectedRoute';
import Dashboard from '../pages/admin/Dashboard';
import ProductsAdmin from '../pages/admin/ProductsAdmin';

const AppRouter = () => {
    return (
        <Router>
            {/* // Proveedor de contexto para la autenticación */}
            <AuthProvider>
                
                    
                    

                <Routes>
                    <Route path="/" element={<Navigate to="/login" replace />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/products" element={<Products />} />

                    <Route path="/admin" element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>} />

                    <Route path="/admin/products" element={
                        <ProtectedRoute>
                            <ProductsAdmin />
                        </ProtectedRoute>} />

                    
                </Routes>
                        
                        
                    
                
            </AuthProvider>
        </Router>
    );
};

export default AppRouter;