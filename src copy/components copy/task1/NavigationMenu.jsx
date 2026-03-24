import './NavigationMenu.css'
import { Routes, Route } from 'react-router'
import Navbar from './Navbar'
// import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage'
import DriftPage from './pages/DriftPage'
import TimeAttackPage from './pages/TimeAttackPage'
import ForzaPage from './pages/ForzaPage'

function NavigationMenu() {
  return (
    <div className='task1'>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/drift" element={<DriftPage />} />
        <Route path="/timeattack" element={<TimeAttackPage />} />
        <Route path="/forza" element={<ForzaPage />} />
      </Routes>
    </div>
  )
};

export default NavigationMenu;