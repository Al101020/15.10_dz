import { nanoid } from 'nanoid';
import {ADD_SERVICE, REMOVE_SERVICE, EDIT_SERVICE} from '../actions/actionTypes';

const initialState = [
  {id: nanoid(), name: 'Замена стекла', price: 21000},
  {id: nanoid(), name: 'Замена дисплея', price: 25000},
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const {name, price} = action.payload;      // console.log(state); //
      return [...state, {id: nanoid(), name, price: Number(price)}];
    case REMOVE_SERVICE:
      
      const {id} = action.payload;
      console.log(id);//
      return state.filter(service => service.id !== id);
    case EDIT_SERVICE:
      const {idEdit, nameEdit, priceEdit} = action.payload;
      console.log(idEdit);
      const obj = state.find(item => item.id === idEdit);
      console.log(obj);
      // return state.filter(service => service.id !== id);
      return;
      (
        console.log(state)
        // state.find(item => item.id === 4);
      );
    default:
      return state;
  }
}
