import {useSelector, useDispatch} from 'react-redux';
import {removeService} from '../actions/actionCreators';

import { useEffect, useState } from 'react';

// export const objIdEdit = {id: null};
export const objForVar = {id: null};

export default function ServiceList() {
  const [filter, setFilter] = useState(null);//

  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleEdit = (e, o) => {
    const form = e.target.closest('#root').querySelector('#form');
    const save = form.querySelector('.save'); 
    save.classList.add('edit');

    form.innerHTML += `<button type='button' id='btnCansel'>cansel</button>`;
    const btnCancel = form.children[3];

    btnCancel.addEventListener('click', () => {
      save.className = 'save';
      form.children[0].value = '';
      form.children[1].value = '';
      btnCancel.remove();
    });

    objForVar.id = o.id;
    const nameEdit = o.name;
    form.children[0].value = nameEdit;
    const priceEdit = o.price;
    form.children[1].value = priceEdit;
  };

  const handleRemove = id => { dispatch(removeService(id)) };

  const handleChangeFilter = (e) => {
    e.preventDefault();

    objForVar.inputFilter = e.target;  // ----

    // console.log(e.target);
    const textFilter = e.target.value;

    // console.log(textFilter);

    if (textFilter !== null) {
      setFilter(textFilter);      // e.target.value = '';
    }
  }

  useEffect(() => {
    if (filter === null) {
      return;
    }
    // console.log(filter);    
    // console.log(objForVar.inputFilter.parentElement);
    
    const li = [...objForVar.inputFilter.parentElement.children[1].children];
    for (let i = 0; i < li.length; i++) { 
      const textLi = li[i].textContent;
      // console.log(textLi);
              // li[i].remove(); // text.indexOf("Script")
      if (textLi.indexOf(filter) !== -1) {
        // console.log(li[i]);
        // console.log('искомы текст имеется ' + filter);
        if (li[i].classList.contains('displayNone')) {
          li[i].classList.remove('displayNone');
        };
      } else {
        // console.log('НЕТ искомого текста: ' + filter);
        // .classList.contains('secondary'); // true
        if (!li[i].classList.contains('displayNone')) {
          li[i].classList.add('displayNone');
        };
      };
      // console.log(li);
    };

    // [...li].filter(li => li.id === 1); // не перерисовал объект

    // for (let i = 0; i < li.length; i++) { // удаляет все услуги
    //   console.log(li[i]);
    //   li[i].remove();
    // };
            // for (let i = 0; i < li.length; i++) { 
            //   const textLi = li[i].textContent;
            //   console.log(textLi);
            //   // li[i].remove(); // text.indexOf("Script")
              
            //   if (textLi.indexOf(filter) !== -1) {
            //     console.log(li[i]);
            //   } else {
            //     console.log('нет: ' + filter);
            //   };

      // if (textLi.indexOf('t') !== -1) {
      //   console.log(li[i]);
      // } else {
      //   console.log('нет: t');
      // };
    // };
  }, [filter]);
 
  return (
    <>
      <ul>
        {items.map(o => (
          <li key={o.id} className='li'>
            {o.name} {o.price}
            <button onClick={(e) => handleEdit(e, o)}>✎</button>
            <button onClick={() => handleRemove(o.id)}>✕</button>
          </li>
        ))}
      </ul>
      <input
        type='text'
        name='textFilter'
        onChange={handleChangeFilter}//handleChange 
        placeholder='Фильтр'
        // value={item.name}
        // required
        autoComplete='off'
      />
    </>
  )
  // return ( // с кнопкой
  //   <>
  //     <ul>
  //       {items.map(o => (
  //         <li key={o.id} className='li'>
  //           {o.name} {o.price}
  //           <button onClick={(e) => handleEdit(e, o)}>✎</button>
  //           <button onClick={() => handleRemove(o.id)}>✕</button>
  //         </li>
  //       ))}
  //     </ul>
  //     <form id='formFilter' onSubmit={handleSubmitFilter}>
  //       <input
  //         type='text'
  //         name='textFilter'
  //         // onChange={handleChange}
  //         placeholder='Фильтр'
  //         // value={item.name}
  //         // required
  //         autoComplete='off'
  //       />
  //       <button type='submit'>Фильтр</button>
  //     </form>
  //   </>
  // )
}



  // return ( // 1 задание
  //   <ul>
  //     {items.map(o => (
  //       <li key={o.id} className='li'>
  //         {o.name} {o.price}
  //         <button onClick={(e) => handleEdit(e, o)}>✎</button>
  //         <button onClick={() => handleRemove(o.id)}>✕</button>
  //       </li>
  //     ))}
  //   </ul>
  // )