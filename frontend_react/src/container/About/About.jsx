import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants'; 
import './About.scss';

const abouts = [
  { title: 'Web Devloper', description: 'Working on the web is my passion as I love to work on exciting projects.', imgUrl: images.about01 },
  { title: 'Web Design', description: 'I love working with clients to help them create their dream website.', imgUrl: images.about02 },
  { title: 'Full-Stack Developer', description: 'I have a strong command over both front-end and back-end technologies, building complete and scalable applicationd', imgUrl: images.about03 },
  { title: 'UI/UX', description: ' am passionate about creating intuitive user interfaces that provides an exceptional user experience.', imgUrl: images.about04 },
]

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]'
  }, []);
  

  return (
    <>
      <h2 className='head-text'>
        I Know that <span>Good Apps</span> <br /> means <span>Good Business</span>
      </h2>

      <div className='app__profiles'>
        { abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title}/>
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 20 }}>{about.description}</p>
          </motion.div>
        )) }
      </div>
    </>
  )
}

export default About