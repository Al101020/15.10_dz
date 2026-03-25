import {useSelector, useDispatch} from 'react-redux';
import {removeService, editService} from '../actions/actionCreators';

export const objIdEdit = {id: null};

export default function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleEdit = (e, o) => {
    const form = e.target.closest('#root').querySelector('#form');// const save = form.children[2];
    const save = form.querySelector('.save'); 
    save.classList.add('edit');
    console.log(save);// console.log(save.classList.contains('save')); // true

    form.innerHTML += `<button type='button' id='btnCansel'>cansel</button>`;
    const btnCancel = form.children[3];

    btnCancel.addEventListener('click', () => {
      save.className = 'save';
      form.children[0].value = '';
      form.children[1].value = '';
      btnCancel.remove();  // console.log('btnCancel');
      console.log(save);
    });

    // const idEdit = o.id;
    objIdEdit.id = o.id;
    console.log(objIdEdit);
    const nameEdit = o.name;
    form.children[0].value = nameEdit;
    const priceEdit = o.price;
    form.children[1].value = priceEdit;
    // console.log('idEdit - ' + idEdit + ', nameEdit - ' + nameEdit + ', priceEdit - ' + priceEdit);
    // dispatch(editService(idEdit, nameEdit, priceEdit));
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

{/* <button className='btnEdit' onClick={btnEdit}>✎</button> */}

  // const handleEdit = o => { console.log(o) }; // работает 

    // console.log(e.target.closest('.li'));
    // document.getElementById("inputFields");// console.log(o);
    // const btnCancel = () => console.log('btnCancel');

    // console.log(form.children[0]);
    
        // btnCancel.setAttribute('type', 'button');
