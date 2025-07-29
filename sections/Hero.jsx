'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';


import styles from '../styles';
import { fadeIn, slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings}`}>
    <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once: true, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className='flex justify-center items-center flex-col relative z-10'>
        <motion.h1 variants={textVariant(1.1)}
        className={styles.heroHeading}>
          Hi, I'm Raphael Gutierrez
        </motion.h1>
      </div>

      <motion.div 
      variants={fadeIn('up', 'tween', 0.2, 1)}
      className='relative w-full md:-mt-[20px] mt-[12px] justify-center flex items-center'
      >
        {/* <div className='absolute w-full h-[300px] hero-gradient z-[0] -top-[30px]'/> */}

          <div className='gradient-03 sm:h-[400px] h-[250px] z-10 rounded-full mt-10 w-full absolute opacity-100'/>

          <img
          src='/profile.png'
          alt='cover'
          className=' sm:h-[400px] h-[250px] z-10 rounded-full mt-10 
          drop-shadow-2xl border-[4px] border-green-300/30
        hover:border-white transition-all duration-300'
          loading="lazy"
          decoding="async"
          />


      </motion.div>


    </motion.div>
  </section>
);

export default Hero;
