import './Task.css';
import { Routes, Route } from 'react-router';
import FormOfAddition from './pages/FormOfAddition'; // import HomePage from './pages/HomePage';
import { useEffect, useState } from 'react';

function task() {
  const [nameOfTheService, setNameOfTheService] = useState('');
  const [cost, setCost] = useState('');   // console.log(cost);
  const [arrServis, setArrServis] = useState([]);

  // useEffect(() => {
  //   console.log(arrServis);
  // }, [arrServis]); // не работает

  return (
    <div className='task'>
      <Routes>
        <Route path="/" element={<FormOfAddition
          nameOfTheService={nameOfTheService}
          setNameOfTheService={setNameOfTheService}
          cost={cost}
          setCost={setCost}          // setNewServis={setNewServis}
          arrServis={arrServis}
          setArrServis={setArrServis}
        />} />
        
        {/* <Route path="/drift" element={<DriftPage />} />
        <Route path="/timeattack" element={<TimeAttackPage />} />
        <Route path="/forza" element={<ForzaPage />} /> */}
      </Routes>
    </div>
  )
};

export default task;
