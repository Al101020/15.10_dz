import {useSelector, useDispatch} from 'react-redux';
import {removeService} from '../actions/actionCreators';

export const objIdEdit = {id: null};

export default function ServiceList() {
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

    objIdEdit.id = o.id;
    const nameEdit = o.name;
    form.children[0].value = nameEdit;
    const priceEdit = o.price;
    form.children[1].value = priceEdit;
  };

  const handleRemove = id => { dispatch(removeService(id)) };
 
  return (
    <ul>
      {items.map(o => (
        <li key={o.id} className='li'>
          {o.name} {o.price}
          <button onClick={(e) => handleEdit(e, o)}>✎</button>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  )
}
