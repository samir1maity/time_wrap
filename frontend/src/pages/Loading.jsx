/** @format */
import { motion } from "framer-motion";
const Loading = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700'>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}>
        <motion.svg
          width='100'
          height='100'
          viewBox='0 0 100 100'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}>
          <circle cx='50' cy='50' r='45' stroke='white' strokeWidth='10' />
          <path d='M50 25L75 75H25L50 25Z' fill='white' />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Loading;
