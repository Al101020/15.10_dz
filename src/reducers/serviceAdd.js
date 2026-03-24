// import {CHANGE_SERVICE_FIELD} from '../actions/actionTypes';

import { CHANGE_SERVICE_FIELD } from '../actions/actionTypes.js';

const initialState = { name: '', price: '', };

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      // console.log(action.payload);
      const {name, value} = action.payload;
      // console.log(name);//
      // console.log(value);//
      return {...state, [name]: value};
    default:
      return state;
  }
}