'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0'/>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >

      <TypingText title='About Me' textStyles='text-center'/>

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='z-0 mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
      >
        I am a Computing Science student at the <span className='font-semibold text-white hover:text-gold transition-all optimize-animation duration-300'>University of Alberta. </span> 
        I am interested in mobile and full-stack development, but leaning more into front-end and designing elegant and intuitive UI. Check out my projects below!
      </motion.p>

      <motion.img
        variants={fadeIn('down', 'tween', 0.3, 1)}
        src='/arrow-down.svg'
        alt='arrow down'
        className='w-[18px] h-[28px] object-contain mt-[28px]'
      >

      </motion.img>

    </motion.div>
  </section>
);

export default About;
