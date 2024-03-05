import React from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <h2 className='head-text'>Take a coffee & chat with me</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:amankwahnanayaw5@gmail.com' className='p-text'>amankwahnanayaw5@gmail.com</a>
        </div>

        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href='tel: +233 553163348' className='p-text'>+233 553163348 / +233 2080410 </a>
        </div>
      </div>

      <div className='app__footer-form app__flex'>
        <div className='app__flex' >
          <input className='p-text' type='text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput}/>
        </div>
        <div className='app__flex' >
          <input className='p-text' type='email' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput}/>
        </div>
        <div>
          <textarea 
            className='p-text'
            placeholder='Your Message'
            name={message}
            value={message}
            onChange={handleChangeInput}
            
          />
        </div>
        <button></button>
      </div>

    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'footer',
  "app__whitebg"
  )