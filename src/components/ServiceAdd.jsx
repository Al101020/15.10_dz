import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, editService} from '../actions/actionCreators';

// import { objIdEdit } from './ServiceList'
import { objForVar } from './ServiceList'

export default function ServiceAdd() {
  const item = useSelector(state => state.serviceAdd);

  const dispatch = useDispatch();

  const handleChange = evt => {
    const {name, value} = evt.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    
    const target = evt.target;
    if (target.children.length === 3) {
      const name = evt.target.children[0].value;
      const price = evt.target.children[1].value;
      dispatch(addService(name, price));
      evt.target.children[0].value = '';
      evt.target.children[1].value = '';
    } else if (target.children.length === 4) {
      const name = evt.target.children[0].value;
      const price = evt.target.children[1].value;
      dispatch(editService(objForVar.id, name, price));
      evt.target.children[0].value = '';
      evt.target.children[1].value = '';
      const btnCancel = evt.target.children[3];
      btnCancel.remove();
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
