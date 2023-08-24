'use client';

import {motion} from 'framer-motion'
import { socials } from '../constants';
import { useRouter } from 'next/navigation';
import styles from '../styles';
import { footerVariants } from '../utils/motion';
import Link from 'next/link';

const CustomLink = ({href, title, className=''}) => {
  const router = useRouter();
  return(
      <Link href={href} target='_blank' className={`${className} relative group`}>
          {title}

          <span className={`
          h-[3px] inline-block bg-white 
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-200
          ${router.asPath === href ? 'w-full' : 'w-0'}
          `}>&nbsp;</span>
      </Link>
  )
}

const CustomLink2 = ({href, title, className=''}) => {
  const router = useRouter();
  return(
      <Link href={href} target='_blank' className={`${className} relative group`}>
          {title}

          <span className={`
          h-[3px] inline-block bg-white 
          absolute right-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-200
          ${router.asPath === href ? 'w-full' : 'w-0'}
          `}>&nbsp;</span>
      </Link>
  )
}

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial='hidden'
    whileInView='show'
    className={`${styles.paddings} py-8 relative`}
  >
    <div className='footer-gradient'/>

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className='flex items-center justify-center flex-wrap gap-2 mb-3 '>

        <CustomLink href='mailto:rmbgutierrez1@gmail.com' title='contact' className='font-normal md:text-[34px] 
        text-[14px] text-white opacity-70 hover:opacity-100 transition-all'/>

        <p className='font-normal md:text-[34px] text-[14px] text-white opacity-70'> & </p>

        <CustomLink2 href='/raph_resume.pdf' title='resume' className='font-normal md:text-[34px] text-[14px]
         text-white opacity-70 hover:opacity-100 transition-all'/>


        {/* <h4 className='font-normal md:text-[34px] text-[14px] text-white opacity-70'>contact & resume</h4> */}

        {/* <button type='button' className='flex items-center h-fit py-4
        px-6 bg-[#25618b] rounded-[50px] gap-[12px]'>
          <img src='/email.svg'
          alt='headset'
          className='w-[24px] h-[24px] object-contain '/>
        </button> */}

      </div>
      
      <div className='flex flex-col'>
        <div className='mb-[50px] h-[2px] bg-white opacity-10'/>
        
        <div className='flex items-center justify-between flex-wrap gap-4'>

          <p className='font-normal text-[14px] text-white opacity-50'>
          Copyright © 2023. All rights reserved
          </p>


          <div className='flex gap-4'>
            {socials.map((social) =>(
              <a href={social.link} target='_blank' className='inline-flex items-center'>
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className='w-[24px] h-[24px] object-contain cursor-pointer'
                />
              </a>

            ))}

          <a target='_blank' className='text-[20px] 
        leading-[30px] text-white flex-wrap'>
          KC♡
        </a>

          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
