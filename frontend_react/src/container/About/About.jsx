import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './About.scss';

const abouts = [
  { title: 'Front-end Developer', description: 'I am a great web developer', imgUrl: '' },
  { title: 'Back-end Developer', description: 'I am a great web developer', imgUrl: '' },
  { title: 'UI/UX', description: 'I am a great web developer', imgUrl: '' },
  { title: 'Full-Stack Developer', description: 'I am a great web developer', imgUrl: '' },
]

const About = () => {
  return (
    <>
      <h2 className='head-text'>
        I Know that
        <span>Good Design</span>
        <br />
        means
        <span>Good Business</span>
      </h2>

      <div>
        { abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
          >

          </motion.div>
        )) }
      </div>
    </>
  )
}

export default About