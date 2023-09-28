import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ContactUs({ contactRef }) {
  const form = useRef();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_stqbexb', 'template_gl4fykr', form.current, 'A0yMhGCbJrQ8dMh6q')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div ref={contactRef} id='contact' className='h-screen'>
      <div className='flex flex-col items-center relative bg-gray-950/80 backdrop-blur border-y-1.5 border-pink'>
        <h2 className='text-gray-400 text-lg mt-12'>CONTACT ME</h2>
        <div className='flex justify-around my-24'>
          <div className='flex-1'>
            <h2 className='text-white text-5xl mb-5'>Need a website or an application built?</h2>
            <p className='text-gray-400 text-3xl mb-20'>Let&#39;s bring your idea to life.</p>
            <div className='group'>
              <a className="text-pink group-hover:text-white" href="mailto:iacovozzi.jessica@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className='text-pink me-2 group-hover:text-white' />
                iacovozzi.jessica@gmail.com
              </a>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col text-white flex-1'>
            <label className='mb-1'>NAME</label>
            <input type="text" name="user_name" value={username} onChange={(e) => setUsername(e.target.value)} className='rounded-md text-2xl text-gray-950 mb-4 p-2' />
            <label className='my-1'>EMAIL</label>
            <input type="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} className='rounded-md text-2xl text-gray-950 mb-4 p-2' />
            <label className='my-1'>MESSAGE</label>
            <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} className='rounded-md text-2xl text-gray-950 mb-4 p-2' />
            <button type="submit" className="hover:text-pink mt-2 text-lg relative inline-flex border-2 border-white hover:border-pink justify-center px-4 py-2 overflow-hidden font-medium transition-all bg-gray-950 rounded-lg hover:bg-gray-950 group">Send message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
