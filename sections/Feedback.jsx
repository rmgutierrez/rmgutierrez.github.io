'use client';

import { motion } from 'framer-motion'
import styles from '../styles'
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className='flex-[0.5] lg:max-w-[370px] flex justify-end flex-col
         sm:p-8 p-4 rounded-[20px] border-[0px] border-[#6a6a6a] relative'
      >
        <div className='feedback-gradient'/>

        <div>

          <p className='mt-[10px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px]
          leading-[39px] text-white text-center'>
            As a CS student from the UofA, I come across multiple
            people who share the same goals and interest as me, connect
            with me on <a href='https://www.linkedin.com/in/raphael-gutierrez-b0a608261/' target='_blank' className='underline hover:font-bold transition-all duration-75'>linked in!</a>
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className='relative flex-1 flex justify-center items-center'
      >
        <img
          src='/uofa.png'
          alt='planet-09'
          className='w-full lg:-h-[410px] h-auto min-h-[210px] object-cover rounded-[20px] brightness-75 blur-[1px]'
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
