'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
     variants={navVariants}
     initial='hidden'
     whileInView='show'
     className={`${styles.xPaddings} py-8 relative`}
  >
    <div className='absolute w-[100%] inset-1 gradient-01 opacity-40'/>
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <img
          src='/github-white.svg'
          alt='search'
          className='w-[24px] h-[24px] object-contain invisible'
          loading="lazy"
          decoding="async"
        />

        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab' target='_blank' className='font-extrabold text-[24px] 
        leading-[30px] text-white absolute left-[49%] translate-x-50'>
          RG
        </a>

        <div className='flex flex-row gap-5 z-0'>

        <a href='https://github.com/rmgutierrez' target='_blank' className='inline-flex items-center'>
                  <img
                    src='github-white.svg'
                    alt='github'
                    className='w-[24px] h-[24px] object-contain cursor-pointer hover:opacity-60 transition-all optimize-animation'
                    loading="lazy"
                    decoding="async"
                  />
                </a>


            <a href='https://www.linkedin.com/in/raphael-gutierrez-b0a608261/' target='_blank' className='inline-flex items-center'>
                  <img
                    src='linkedin.svg'
                    alt='github'
                    className='w-[24px] h-[24px] object-contain cursor-pointer hover:opacity-60 transition-all'
                    loading="lazy"
                    decoding="async"
                  />
                </a>

        </div>

    </div>

    <div className='mb-[50px] mt-[20px] h-[2px] bg-white opacity-10'/>

  </motion.nav>
);

export default Navbar;
