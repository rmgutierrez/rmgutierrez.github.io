'use client'

import { FaReact, FaGithub, FaGit, FaPython,
  FaJava, FaDocker, FaHtml5 } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiJavascript,
  SiDjango, SiCplusplus, SiPostgresql, SiFirebase, SiVite, SiPandas,
  SiNumpy, SiScikitlearn, SiFlask } from 'react-icons/si';
import { TbSql } from "react-icons/tb";
import { TypingText } from '../components';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';

const techStack = [
  { icon: <FaPython />, name: 'Python' },
  { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <SiJavascript />, name: 'JavaScript' },
  { icon: <SiCplusplus />, name: 'C/C++' },
  { icon: <FaHtml5 />, name: 'HTML' },
  { icon: <FaJava />, name: 'Java' },
  { icon: <TbSql />, name: 'SQL' },
  { icon: <FaReact />, name: 'React' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <SiPostgresql />, name: 'PostgreSQL' },
  { icon: <SiDjango />, name: 'Django' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
  { icon: <SiPandas />, name: 'Pandas' },
  { icon: <SiNumpy />, name: 'NumPy' },
  { icon: <SiScikitlearn />, name: 'scikit-learn' },
  { icon: <SiFlask />, name: 'Flask' },
  { icon: <FaDocker />, name: 'Docker' },
  { icon: <FaGithub />, name: 'Github' },
  { icon: <SiFirebase />, name: 'Firebase' },
  { icon: <SiVite />, name: 'Vite' },
];

export default function TechStack() {
  return (
    <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once: true, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title='Tech Stack and Tools'
      textStyles='text-center'/>      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center pt-10">
        {techStack.map((tech, i) => (
          <div key={i} className="flex flex-col items-center text-center text-[#bcbcbc] pb-3">
            <div className="text-4xl mb-2">{tech.icon}</div>
            <p className="text-sm">{tech.name}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
