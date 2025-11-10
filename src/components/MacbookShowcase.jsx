import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Cpu, Cloud, Database } from 'lucide-react';

const skills = [
  { icon: Code, label: 'JavaScript' },
  { icon: Palette, label: 'UI/UX' },
  { icon: Cpu, label: 'React' },
  { icon: Cloud, label: 'Cloud' },
  { icon: Database, label: 'MongoDB' },
];

export default function MacbookShowcase() {
  const [open, setOpen] = useState(false);
  const lidRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-[#0b0b0f] px-6">
      <div className="relative w-full max-w-5xl aspect-[16/9]">
        {/* MacBook body */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[92%] h-4 rounded-b-xl bg-gradient-to-b from-zinc-400/50 to-zinc-700 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)]" />

        {/* MacBook base */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-3 rounded-xl bg-gradient-to-b from-zinc-300/80 to-zinc-600" />

        {/* Keyboard deck */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 w-[84%] h-40 rounded-t-xl bg-gradient-to-b from-zinc-800 to-zinc-900 border border-zinc-700" />

        {/* Screen hinge */}
        <div className="absolute bottom-[9.5rem] left-1/2 -translate-x-1/2 w-[70%] h-3 rounded-full bg-zinc-700" />

        {/* Screen (lid) */}
        <motion.div
          ref={lidRef}
          initial={{ rotateX: 95, transformPerspective: 1200, transformOrigin: 'bottom center' }}
          animate={{ rotateX: open ? 0 : 95 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-[10rem] left-1/2 -translate-x-1/2 w-[78%] h-[48%] bg-gradient-to-b from-zinc-900 to-black border border-zinc-700 rounded-md overflow-hidden"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Screen content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: open ? 1 : 0, scale: open ? 1 : 0.95 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-center px-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold">Welcome to my world</h2>
              <p className="mt-2 text-white/70">Exploring creative code and delightful interfaces.</p>
            </motion.div>
          </div>

          {/* Bezel shine */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Dock with skills */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: open ? 0 : 40, opacity: open ? 1 : 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-end gap-4 px-5 py-2 rounded-2xl bg-white/10 backdrop-blur border border-white/10"
        >
          {skills.map(({ icon: Icon, label }, idx) => (
            <motion.div
              key={label}
              whileHover={{ y: -10, scale: 1.08 }}
              className="flex flex-col items-center"
            >
              <div className="size-12 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 grid place-items-center shadow-lg">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <span className="mt-1 text-xs text-white/70">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
