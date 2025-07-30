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
      viewport={{once: true, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >

      <TypingText title='About Me' textStyles='text-center'/>

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='z-0 mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
      >
        As a recent graduate of Computing Science at the University of Alberta,
        I have a solid background in full-stack development, AI/ML, and system design. 
        I love collaborating with others to create dependable, user-friendly software, and I have a strong interest in applying technology to address practical issues. 
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
