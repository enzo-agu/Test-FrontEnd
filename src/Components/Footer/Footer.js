import './Footer.css'
import SweetAlert2 from 'react-sweetalert2';
import { useState } from 'react';

const Footer = () => {
  const [swalProps, setSwalProps] = useState({});

  const suscribeToNewsletter = (event) => {
    event.preventDefault();
    const response = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        "email": event.target.form[1].value.toString(),
        "name": event.target.form[0].value.toString()
      })
    }
    fetch('https://corebiz-test.herokuapp.com/api/v1/newsletter', response)
      .then(res => res.json())
      .then(data => console.log(data))
    setSwalProps({
      show: true,
      title: 'subscribed!',
    });
  }
  
  return (<>
    <form>
      <input type="text" name="name" placeholder="enter your name" required />
      <input type="email" name="mail" placeholder="enter your mail" required />
      <button onClick={suscribeToNewsletter}>Subscribe</button>
      <SweetAlert2 {...swalProps} />
    </form>
    <div className='divForm'>
      <h3>Ubicación</h3>
    </div>
  </>)
}
export default Footer