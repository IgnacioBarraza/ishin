import { Variants } from 'framer-motion'

export const fadeInPage: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -10 },
}

export const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const itemVariants: Variants = {
  initial: { opacity: 0, x: -5 },
  animate: { opacity: 1, x: 0 },
}
