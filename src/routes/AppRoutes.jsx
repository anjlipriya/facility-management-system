// src/routes/AppRoutes.jsx
import MainLayout from '@/layouts/MainLayout';
import About from '@/pages/About';
import Contact from '@/pages/Contacts';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import Services from '@/pages/Services';

import { Routes, Route } from 'react-router-dom';


const AppRoutes = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        } 
      />
      <Route 
        path="/about" 
        element={
          <MainLayout>
            <About />
          </MainLayout>
        } 
      />
      <Route 
        path="/contact" 
        element={
          <MainLayout>
            <Contact />
          </MainLayout>
        } 
      />
       <Route 
        path="/services" 
        element={
          <MainLayout>
            <Services />
          </MainLayout>
        } 
      />
      <Route 
        path="*" 
        element={
          <MainLayout>
            <NotFound />
          </MainLayout>
        } 
      />
    </Routes>
  );
};

export default AppRoutes;