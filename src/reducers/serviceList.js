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
      console.log(action.payload);
      // const {idEdit, nameEdit, priceEdit} = action.payload;
      const idEdit = action.payload.id;// console.log(idEdit);//
      const nameEdit = action.payload.name;//
      const priceEdit = action.payload.price;//

      const objEdit = state.find(item => item.id === idEdit);//
      objEdit.name = nameEdit;
      objEdit.price = priceEdit;
      console.log(objEdit);//

      console.log(state);//

      return state.forEach(item => {
        console.log(item.id)
        if (item.id === idEdit) {
          console.log(item.id)
          item.name = nameEdit;
          item.price = priceEdit;
          console.log(item);
        }
      });

      // return state;
      
    default:
      return state;
  }
}
