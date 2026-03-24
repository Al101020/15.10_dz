import React from 'react';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';

export default function App() {
  return (
    <>
      <ServiceAdd />
      <ServiceList />
    </>
  );
}




// // import { useState } from 'react'
// import './App.css'
// // import React from 'react';
// import { Provider } from 'react-redux';
// import Task from './components/Task'


// function App() {

//   return (
//     <>
//       <h3>Задание</h3>
//       <Provider>
//         <Task />
//       </Provider>
//     </>
//   )
// }

// export default App
