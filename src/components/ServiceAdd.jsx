// import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService} from '../actions/actionCreators';

export default function ServiceAdd() {
  const item = useSelector(state => state.serviceAdd);// console.log(item);

  const dispatch = useDispatch();

  const handleChange = evt => {    // console.log(evt); // --- проверка ---
    const {name, value} = evt.target;        // console.log(name + ' - ' + value); // --- проверка
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const name = evt.target.children[0].value;
    const price = evt.target.children[1].value;// console.log(name + ' - ' + value); //проверка
    dispatch(addService(name, price));
    evt.target.children[0].value = '';
    evt.target.children[1].value = 0;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        onChange={handleChange}
        placeholder='Наименование услуги'
        value={item.name}
        required
      />
      <input
        type='number'
        name='price'
        onChange={handleChange}
        value={item.price}
        placeholder='Стоимость'
        required 
      />
      <button type='submit'>Save</button>
    </form>
  );
} 
