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
  ]
  const galleryImages = [
    "/image_0.jpeg", // Βάλε εδώ τα ονόματα των αρχείων που έχεις στο public
    "/image_1.jpeg"
  ];
  ;

  return (
    <div style={{ backgroundColor: '#0a0a0a' }} className="min-h-screen w-full flex flex-col items-center">
      
      {/* ΧΟΡΟΠΗΔΗΧΤΟ MARTINI */}
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
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center min-h-screen w-full px-6 text-center"
          >
            <h1 style={{ color: '#f59e0b' }} className="text-4xl font-black mb-2 italic uppercase">
              Joanna's Home
            </h1>
            <p className="text-zinc-500 mb-12 text-xs tracking-widest uppercase font-light">
              Premium Collection
            </p>
            
            <div className="flex flex-col w-full max-w-[280px] gap-4">
              <button onClick={() => setPage('menu')} className="w-full bg-zinc-100 text-black py-5 rounded-2xl font-bold text-lg shadow-lg">
                📜 ΤΟ ΜΕΝΟΥ
              </button>
              <button onClick={() => setPage('gallery')} className="w-full border border-zinc-800 bg-zinc-900 py-5 rounded-2xl font-bold text-lg text-white">
                📸 Η ΣΥΛΛΟΓΗ
              </button>
            </div>
          </motion.div>
        )}

        {page === 'menu' && (
          <motion.div 
            key="menu"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="w-full max-w-md p-8 flex flex-col"
          >
            <button onClick={() => setPage('home')} className="text-amber-500 mb-8 font-bold self-start">← ΠΙΣΩ</button>
            <h2 style={{ color: '#f59e0b' }} className="text-3xl font-black mb-8 border-b border-zinc-800 pb-2 italic">THE BAR</h2>
            <div className="space-y-6">
              {drinks.map((d, i) => (
                <div key={i} className="flex justify-between items-center border-b border-zinc-900 pb-4 text-white">
                  <div className="flex items-center gap-3">
                    <span>{d.emoji}</span>
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
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }}
    className="w-full max-w-md p-8 flex flex-col items-center"
  >
    <button 
      onClick={() => setPage('home')} 
      className="text-amber-500 mb-8 font-bold self-start"
    >
      ← ΠΙΣΩ
    </button>

    <h2 style={{ color: '#f59e0b' }} className="text-3xl font-black mb-10 text-center italic uppercase tracking-widest">
      GALLERY
    </h2>
    
    {/* Το grid με σωστά κενά (gap-8) */}
    <div className="grid grid-cols-1 gap-10 w-full">
      {galleryImages.map((url, i) => (
        <motion.div 
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className="w-full"
        >
          <img 
            src={url} 
            className="w-full h-80 object-cover rounded-[2.5rem] border border-zinc-800 shadow-2xl" 
            alt={`Gallery ${i}`}
            onError={(e) => { e.target.src = "https://placehold.co/400x600/111/444?text=Photo+Not+Found"; }}
          />
        </motion.div>
      ))}
    </div>
    
    {/* Ένα κενό στο τέλος για να μην κολλάει η τελευταία φωτό κάτω */}
    <div className="h-20"></div>
  </motion.div>
)}
      </AnimatePresence>
    </div>
  )
}