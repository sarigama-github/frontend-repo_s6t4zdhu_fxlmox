import { motion, AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function HeroSplash({ onEnter }) {
  return (
    <section className="relative h-screen w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black pointer-events-none" />

      <div className="relative h-full flex items-center justify-center text-center px-6">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <motion.h1
              initial={{ letterSpacing: '0.2em' }}
              animate={{ letterSpacing: '0.05em' }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 drop-shadow-lg"
            >
              YOUR NAME
            </motion.h1>
            <p className="mt-6 text-white/80 max-w-2xl mx-auto">
              Creative Developer crafting playful, modern web experiences.
            </p>
            <motion.button
              onClick={onEnter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-10 rounded-full bg-white/10 border border-white/20 px-6 py-3 backdrop-blur text-white font-medium hover:bg-white/20 transition"
            >
              Enter
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
