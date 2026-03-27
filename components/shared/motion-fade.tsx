'use client';

import {motion} from 'framer-motion';

type MotionFadeProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export function MotionFade({children, delay = 0, className}: MotionFadeProps) {
  return (
    <motion.div
      className={className}
      initial={{opacity: 0, y: 14}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, margin: '-80px'}}
      transition={{duration: 0.45, ease: 'easeOut', delay}}
    >
      {children}
    </motion.div>
  );
}
