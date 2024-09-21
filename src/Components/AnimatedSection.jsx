import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2,    // Trigger when 20% of the section is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}  // Initial state
      animate={inView ? { opacity: 1, y: 0 } : {}}  // Animate when in view
      transition={{ duration: 0.8 }}  // Animation duration
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
