import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';

const Testimonial = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  return (
    <div>Testimonial</div>
  )
}

export default Testimonial