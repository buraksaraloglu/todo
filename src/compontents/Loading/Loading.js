import React from 'react';
import { motion } from 'framer-motion';

const style = {
  width: 15,
  height: 15,
  opacity: 1,
  margin: 8,
  borderRadius: 50,
  display: 'inline-block',
  background: '#6e7bf2',
};

const variants = {
  start: {
    scale: 0.2,
    rotate: 0,
  },
  end: {
    scale: 1,
    rotate: 360,
  },
};

const Loading = () => (
  <div style={{ margin: '0 auto' }}>
    <motion.div
      style={style}
      variants={variants}
      initial="start"
      animate="end"
      transition={{
        repeat: 'Infinity',
        repeatType: 'reverse',
        ease: 'easeInOut',
        duration: 1,
        delay: 0,
      }}
    />
    <motion.div
      style={style}
      variants={variants}
      initial="start"
      animate="end"
      transition={{
        repeat: 'Infinity',
        repeatType: 'reverse',
        ease: 'easeInOut',
        duration: 1,
        delay: 0.2,
      }}
    />
    <motion.div
      style={style}
      variants={variants}
      initial="start"
      animate="end"
      transition={{
        repeat: 'Infinity',
        repeatType: 'reverse',
        ease: 'easeInOut',
        duration: 1,
        delay: 0.4,
      }}
    />
    <motion.div
      style={style}
      variants={variants}
      initial="start"
      animate="end"
      transition={{
        repeat: 'Infinity',
        repeatType: 'reverse',
        ease: 'easeInOut',
        duration: 1,
        delay: 0.6,
      }}
    />
    <motion.div
      style={style}
      variants={variants}
      initial="start"
      animate="end"
      transition={{
        repeat: 'Infinity',
        repeatType: 'reverse',
        ease: 'easeInOut',
        duration: 1,
        delay: 0.8,
      }}
    />
  </div>
);

export default Loading;
