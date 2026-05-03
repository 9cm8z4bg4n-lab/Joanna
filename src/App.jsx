import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function App() {
  const [page, setPage] = useState('home');

  const drinks = [
    { name: "Negroni", price: "9€", emoji: "🥃" },
    { name: "Pornstar Martini", price: "10€", emoji: "🍸" },
    { name: "Margarita", price: "8€", emoji: "🍹" },
    { name: "Mojito", price: "8€", emoji: "🍃" },
    { name: "Old Fashioned", price: "10€", emoji: "🍊" }
  ];

  return (
<div className="min-h-screen w-full bg-[#0a0a0a] text-zinc-100 p-6 flex flex-col items-center overflow-x-hidden">
      
      {/* --- ΧΟΡΟΠΗΔΗΧΤΟ MARTINI (Το κρατάμε διακριτικό στην άκρη) --- */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-6 right-6 text-5xl z-50 pointer-events-none"
      >
        🍸
      </motion.div>

      <AnimatePresence mode="wait">
        {page === 'home' && (
          <motion.div 
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center min-h-[80vh] w-full max-w-xs"
          >
            <h1 className="text-4xl font-black mb-2 tracking-tighter italic text-[#f59e0b] uppercase shadow-sm">
            JOANNA'S HOME
            </h1>
            <p className="text-zinc-500 mb-12 text-xs tracking-widest uppercase font-light">
              Premium Collection
            </p>
            
            {/* ΚΑΘΕΤΗ ΔΙΑΤΑΞΗ ΚΟΥΜΠΙΩΝ */}
            <div className="flex flex-col w-full gap-4">
              <motion.button 
                whileTap={{ scale: 0.95 }}
                onClick={() => setPage('menu')}
                className="w-full bg-zinc-100 text-black py-5 rounded-2xl font-bold text-lg shadow-lg"
              >
                📜 ΤΟ ΜΕΝΟΥ
              </motion.button>
              
              <motion.button 
                whileTap={{ scale: 0.95 }}
                onClick={() => setPage('gallery')}
                className="w-full border border-zinc-800 bg-zinc-900/50 py-5 rounded-2xl font-bold text-lg text-white"
              >
                📸 Η ΣΥΛΛΟΓΗ
              </motion.button>
            </div>
          </motion.div>
        )}

        {page === 'menu' && (
          <motion.div 
            key="menu"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-md"
          >
            <button onClick={() => setPage('home')} className="text-amber-500 mb-8 font-bold">← ΠΙΣΩ</button>
            <h2 className="text-3xl font-black mb-8 border-b border-zinc-800 pb-2 italic">THE BAR</h2>
            <div className="space-y-6">
              {drinks.map((d, i) => (
                <div key={i} className="flex justify-between items-center border-b border-zinc-900 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{d.emoji}</span>
                    <span className="text-lg font-medium">{d.name}</span>
                  </div>
                  <span className="font-mono text-amber-500">{d.price}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {page === 'gallery' && (
          <motion.div 
            key="gallery"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-md"
          >
            <button onClick={() => setPage('home')} className="text-amber-500 mb-8 font-bold">← ΠΙΣΩ</button>
            <h2 className="text-3xl font-black mb-8 text-center italic">GALLERY</h2>
            <div className="grid gap-6">
              <div className="bg-zinc-900 h-64 rounded-3xl border border-zinc-800 flex items-center justify-center text-zinc-600 italic">
                Your Photo 1
              </div>
              <div className="bg-zinc-900 h-64 rounded-3xl border border-zinc-800 flex items-center justify-center text-zinc-600 italic">
                Your Photo 2
              </div>
                            <div className="bg-zinc-900 h-64 rounded-3xl border border-zinc-800 flex items-center justify-center text-zinc-600 italic">
                Your Photo 3
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}