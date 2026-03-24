import {useSelector, useDispatch} from 'react-redux';
import {removeService, editService} from '../actions/actionCreators';

export default function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  // const handleEdit = o => { console.log(o) }; // работает 
  const handleEdit = o => {
    console.log(o);
    const idEdit = o.id;
    const nameEdit = o.name;
    const priceEdit = o.price;
    dispatch(editService(idEdit, nameEdit, priceEdit));
  };

  const handleRemove = id => { dispatch(removeService(id)) };
 
  return (
    <ul>
      {items.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleEdit(o)}>✎</button>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  )
}

{/* <button className='btnEdit' onClick={btnEdit}>✎</button> */}