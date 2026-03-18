import './Task.css';
import { Routes, Route } from 'react-router';
// import HomePage from './pages/HomePage';
import FormOfAddition from './pages/FormOfAddition';
import { useEffect, useState } from 'react';

function task() {
  const [nameOfTheService, setNameOfTheService] = useState('');
  const [cost, setCost] = useState('');
  // console.log(cost);

  return (
    <div className='task'>
      <Routes>
        <Route path="/" element={<FormOfAddition
          nameOfTheService={nameOfTheService}
          setNameOfTheService={setNameOfTheService}
          cost={cost}
          setCost={setCost}
        />} />
        
        {/* <Route path="/drift" element={<DriftPage />} />
        <Route path="/timeattack" element={<TimeAttackPage />} />
        <Route path="/forza" element={<ForzaPage />} /> */}
      </Routes>
    </div>
  )
};

export default task;
