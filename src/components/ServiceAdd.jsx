// import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, editService} from '../actions/actionCreators';

import { objIdEdit } from './ServiceList'

export default function ServiceAdd() {
  const item = useSelector(state => state.serviceAdd);// console.log(item);

  const dispatch = useDispatch();

  const handleChange = evt => {    // console.log(evt); // --- проверка ---
    const {name, value} = evt.target;        // console.log(name + ' - ' + value); // --- проверка
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    
    const target = evt.target;
    console.log(target);     // console.log(target.children.length); // length
    // console.log(target.children[2].classList.contains('edit'));
    // if (target.children[2].classList.contains('edit')) {
    //   console.log('кнопка сохранить ИЗМЕНЕНИЯ');
    // } else {
    //   console.log('кнопка сохранить ИЗМЕНЕНИЯ, нет класса EDIT');
    // }

    if (target.children.length === 3) {
      const name = evt.target.children[0].value;
      const price = evt.target.children[1].value;// console.log(name + ' - ' + value); //проверка
      dispatch(addService(name, price));
      evt.target.children[0].value = '';
      evt.target.children[1].value = 0;
    } else if (target.children.length === 4) {
      console.log('кнопка сохранить ИЗМЕНЕНИЯ');// console.log(item); // {name: '', price: ''}
      console.log('Сюда надо написать dispatch  для ИЗМЕНЕНИЯ услуги');
      const name = evt.target.children[0].value;
      const price = evt.target.children[1].value;
      dispatch(editService(objIdEdit.id, name, price)); // id, 
    };

    
  };

  return (
    <form id='form' onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        onChange={handleChange}
        placeholder='Наименование услуги'
        value={item.name}
        required
        autoComplete='on'
      />
      <input
        type='number'
        name='price'
        onChange={handleChange}
        value={item.price}
        placeholder='Стоимость'
        required
        autoComplete='on'
      />
      <button type='submit' className='save'>Save</button>
    </form>
  );
} 
