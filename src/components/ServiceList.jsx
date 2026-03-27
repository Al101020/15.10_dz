import {useSelector, useDispatch} from 'react-redux';
import {removeService} from '../actions/actionCreators';

import { useEffect, useState } from 'react';

export const objForVar = {id: null};

export default function ServiceList() {
  const [filter, setFilter] = useState(null);//

  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleEdit = (e, o) => {
    const form = e.target.closest('#root').querySelector('#form');
    const save = form.querySelector('.save');

    if (form.children.length === 3) {
      form.innerHTML += `<button type='button' id='btnCansel'>cansel</button>`;
    };
    
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

    objForVar.inputFilter = e.target;
    const textFilter = e.target.value;

    if (textFilter !== null) {
      setFilter(textFilter);
    }
  }

  useEffect(() => {
    if (filter === null) {
      return;
    }

    const li = [...objForVar.inputFilter.parentElement.children[1].children];
    
    for (let i = 0; i < li.length; i++) { 
      const textLi = li[i].textContent;
      if (textLi.indexOf(filter) !== -1) {
        if (li[i].classList.contains('displayNone')) {
          li[i].classList.remove('displayNone');
        };
      } else {
        if (!li[i].classList.contains('displayNone')) {
          li[i].classList.add('displayNone');
        };
      };
    };
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
        onChange={handleChangeFilter}
        placeholder='Фильтр'
        autoComplete='off'
      />
    </>
  )
}
