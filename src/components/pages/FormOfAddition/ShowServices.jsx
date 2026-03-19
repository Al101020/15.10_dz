import { v4 as uuidv4 } from 'uuid';

export default function ShowServices(props) {  // console.log(props);
  const arrServis=props.arrServis;
  if (arrServis.length === 0) {
    // console.log('длина массива = 0');
    return;
  }
  // console.log(arrServis);

  const btnEdit = () => {
    console.log(' кнопка btnEdit')
  }

  const btnDel = () => {
    console.log(' кнопка btnDel')
  }

  return (
    <div className='ShowServices'>
      {arrServis.map(service => (
        <div key={uuidv4()} className='service'>
          <div className='marker'></div>
          <div className='serviceName'>{service.name}</div>
          <div className='servicePrice'>{service.price}</div>
          <button className='btnEdit' onClick={btnEdit}>✎</button>
          <button className='btnDel' onClick={btnDel}>X</button>
        </div>
      ))}
    </div>
  )
};
