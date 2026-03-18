import { useEffect, useState } from 'react';

export default function FormOfAddition(props) {

  const nameOfTheService = props.nameOfTheService
  const setNameOfTheService = props.setNameOfTheService  
  const cost = props.cost
  const setCost = props.setCost

  const submitForm = (e) => {
    e.preventDefault();
    
    if (e.target.parentElement.children[0].value === '' || 
    e.target.parentElement.children[1].value === '') {
      alert( 'Нужно заполнить название услуги и стоимость' );// console.log('Нужно заполнить');
      return;
    };

    console.log(nameOfTheService + ' - ' + cost);
    
    setNameOfTheService('');
    setCost('');
  }

  const onChangeCost = ({ target }) => {
    setCost(target.value);
  };

  const onChangeName = ({ target }) => {
    setNameOfTheService(target.value);
  };

  return (
  <>
    <h3 className='form-of-add__title'>Форма добавления</h3>
    <form className='form-add'>
      <input 
        type='text' 
        id='nameOfTheService' 
        name='nameOfTheService'
        value={nameOfTheService}
        onChange={onChangeName}
        placeholder='Наименование услуги'
        required
      />
      <input 
        type='number' 
        id='cost' 
        name='cost'        
        value={cost}        // pattern='[0-8]*' // не работает
        onChange={onChangeCost}
        placeholder='Стоимость'
        required
      />
      <button 
        type='submit'
        id='formBtn'
        onClick={submitForm}
      >Save</button>
    </form>
  </>);
}
