import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import { AdminCatalogoView } from './js/views/AdminCatalogoView'; // Importamos nuestra vista de la HU-03

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <main className="min-h-screen bg-gray-50 pb-12">
      <AdminCatalogoView />
    </main>
  </React.StrictMode>
);
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import { CatalogoProvider } from './context/CatalogoContext'
import AdminCatalogoView from './views/AdminCatalogoView'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CatalogoProvider>
      <Header />
      <AdminCatalogoView />
    </CatalogoProvider>
  </StrictMode>,
)
