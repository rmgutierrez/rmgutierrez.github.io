'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExploreCard, TitleText, TypingText } from '../components';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { projects } from '../constants';

const Projects = () => {
  const [active, setActive] = useState('tandem')
  return(
  <section className={`${styles.paddings}`}
  id='projects'>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title='Personal Projects'
      textStyles='text-center'/>

      <div className='gradient-03'/>

      <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
        {projects.map((world, index) => (
          <ExploreCard
            key={world.id}
            {...world}
            index={index}
            active={active}
            handleClick={setActive}
          />

        ))}

      </div>
    </motion.div>
  </section>
)
        };

export default Projects;
