'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, slideIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick, desc, link, util}) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.3, 1.00)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' :
      'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px]
    h-[700px] transition-[flex] duration-[0.6s]
    ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className={`absolute w-full h-full object-cover rounded-[10px] border-[1px] border-forest ${active !== id ? 'blur-[1px] brightness-60' : ''}`}
    />
    {active !== id ? (
      
      <div className='absolute bottom-0 p-4 justify-start w-full h-full flex-row
      bg-gradient-to-b from-[rgba(0,0,0,0.0)] to-[rgba(0,0,0,0.9)] rounded-[10px] border-[3px] border-green-300/30 hover:border-[rgba(255,255,255,0.68)] 
      transition-all duration-200'>

        <h3 className='font-semibold sm:text-[26px]
        text-[18px] text-white absolute z-0
        lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]
        '>
          {title}
        </h3>
      </div>


    ) : (
      <div className='absolute bottom-0 p-4 justify-start w-full h-full flex-row
      bg-[rgba(0,0,0,0.7)] rounded-[10px] border-[3px] border-[rgba(255,255,255,0.68)]'>
        <div className='flex col'>

            <a href={link} target='_blank 'className={`${styles.flexCenter} h-[60px] w-[60px] rounded-[50px] glassmorphism 
          `}>
              <img
                src='/github-white.svg'
                alt='headset'
                className='w-[70%] h-[70%] flex object-center'
              />
            </a>

          <div className=''>
            <h2 className='mt-[9px] ml-[20px] font-semibold sm:text-[32px] text-[24px] text-white'>
              {title}
            </h2>
          </div>
        </div>

        <motion.p 
        initial={{ opacity: 0, x:-10}}
        animate={{ opacity: 1, x:0}}
        transition={{ duration: 1.5 }}
        className={`text-white mt-5 text-lg text-justify`}>
          {desc}
        </motion.p>


        <p className='text-white absolute right-[20px] bottom-[9px] italic font-bold'>
          {util}
        </p>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
