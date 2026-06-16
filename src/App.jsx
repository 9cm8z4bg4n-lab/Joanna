import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function App() {
  const [page, setPage] = useState('home');

  // ΟΡΓΑΝΩΣΗ ΜΕΝΟΥ ΣΕ ΚΑΤΗΓΟΡΙΕΣ
  const menuCategories = {
    savory: {
      title: "🍕 ΑΛΜΥΡΑ",
      items: [
        { name: "Pizza Margherita", price: "8.50€", image: "/pizza.jpg", rating: 5, review: "Χειροποίητο ζυμάρι με σάλτσα ντομάτας, μοτσαρέλα και φρέσκο βασιλικό." }
      ]
    },
    sweets: {
      title: "🍰 ΓΛΥΚΑ",
      items: [
        { name: "Βάφλα Bueno", price: "7.50€", image: "/vafli.jpg", rating: 5, review: "Φρέσκια βάφλα με πλούσια πραλίνα Bueno και τριμμένο μπισκότο." },
        { name: "Pancakes Chocolate", price: "6.80€", image: "/pancakes.jpg", rating: 5, review: "Αφράτα pancakes με διπλή στρώση σοκολάτας." }
      ]
    },
    drinks: {
      title: "🍸 ΠΟΤΑ & COCKTAILS",
      items: [
        { name: "Pornstar Martini", price: "10.00€", image: "/pornstar.jpg", rating: 5, review: "Το αγαπημένο μας! Δροσερό, με passion fruit και vanilla notes." },
        { name: "Negroni", price: "9.00€", image: "/negroni.jpg", rating: 4, review: "Κλασικό, γλυκόπικρο και balanced." }
      ]
    }
  };

  // ΟΙ ΦΩΤΟΓΡΑΦΙΕΣ ΣΑΣ (Βάλ' τες στο φάκελο public)
  const galleryImages = [
    { url: "/us1.jpg", caption: "Η αγαπημένη μου στιγμή μαζί σου 🥰" },
    { url: "/us2.jpg", caption: "Εμείς 🤍" },
    { url: "/us3.jpg", caption: "Just us ✨" }
  ];

  return (
    <div style={{ backgroundColor: '#0a0a0a' }} className="min-h-screen w-full flex flex-col items-center">
      
      {/* CUTE FLOATING ΚΑΡΔΟΥΛΑ */}
      <motion.div 
        animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-6 right-6 text-4xl z-50 pointer-events-none drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]"
      >
        ❤️
      </motion.div>

      <AnimatePresence mode="wait">
        {/* --- HOME PAGE --- */}
        {page === 'home' && (
          <motion.div 
            key="home"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center min-h-screen w-full px-6 text-center"
          >
            <h1 style={{ color: '#f59e0b' }} className="text-4xl font-black mb-1 italic uppercase tracking-tight">
              Our Place
            </h1>
            <p className="text-zinc-500 mb-12 text-xs tracking-widest uppercase font-light">
              Made with love & sugar ❤️
            </p>
            
            <div className="flex flex-col w-full max-w-[280px] gap-4">
              <button onClick={() => setPage('menu')} className="w-full bg-zinc-100 text-black py-5 rounded-2xl font-bold text-lg shadow-lg tracking-wide">
                📜 ΜΕΝΟΥ
              </button>
              <button onClick={() => setPage('gallery')} className="w-full border border-zinc-800 bg-zinc-900/40 py-5 rounded-2xl font-bold text-lg text-white tracking-wide">
                📸 Η ΣΥΛΛΟΓΗ ΜΑΣ
              </button>
            </div>
          </motion.div>
        )}

        {/* --- MENU PAGE --- */}
        {page === 'menu' && (
          <motion.div 
            key="menu"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="w-full max-w-md p-6 flex flex-col"
          >
            <button onClick={() => setPage('home')} className="text-amber-500 mb-8 font-bold self-start text-sm">← ΠΙΣΩ</button>
            <h2 style={{ color: '#f59e0b' }} className="text-3xl font-black mb-8 border-b border-zinc-800 pb-2 italic">MENU</h2>
            
            <div className="space-y-10">
              {Object.keys(menuCategories).map((categoryKey) => {
                const category = menuCategories[categoryKey];
                return (
                  <div key={categoryKey} className="space-y-4">
                    {/* Τίτλος Κατηγορίας (Αλμυρά, Γλυκά, Ποτά) */}
                    <h3 className="text-amber-500/80 font-bold tracking-wider text-sm px-1">{category.title}</h3>
                    
                    {/* Αντικείμενα Κατηγορίας */}
                    <div className="space-y-6">
                      {category.items.map((item, idx) => (
                        <div key={idx} className="bg-zinc-900/30 p-4 rounded-3xl border border-zinc-900/80 text-white flex flex-col gap-4">
                          <img 
                            src={item.image} 
                            className="w-full h-44 object-cover rounded-2xl border border-zinc-800/60"
                            alt={item.name}
                            onError={(e) => { e.target.src = "https://placehold.co/500x300/111/444?text=Delicious"; }}
                          />
                          <div className="flex justify-between items-center px-1">
                            <span className="text-lg font-bold">{item.name}</span>
                            <span className="font-mono text-amber-500 font-bold">{item.price}</span>
                          </div>
                          <div className="bg-black/30 p-3 rounded-xl border border-zinc-900 text-xs">
                            <div className="text-amber-400 mb-1">
                              {"⭐".repeat(item.rating)}
                            </div>
                            <p className="text-zinc-400 italic">"{item.review}"</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="h-10"></div>
          </motion.div>
        )}

        {/* --- CUTE GALLERY PAGE --- */}
        {page === 'gallery' && (
          <motion.div 
            key="gallery"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="w-full max-w-md p-6 flex flex-col items-center"
          >
            <button onClick={() => setPage('home')} className="text-amber-500 mb-6 font-bold self-start text-sm">← ΠΙΣΩ</button>
            <h2 style={{ color: '#f59e0b' }} className="text-2xl font-black mb-2 text-center italic uppercase tracking-widest">MEMORIES</h2>
            <p className="text-zinc-600 text-xs mb-8 italic">Our favorite moments together ❤️</p>
            
            <div className="grid grid-cols-1 gap-6 w-full">
              {galleryImages.map((img, i) => (
                <motion.div 
                  key={i}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-zinc-950 p-3 rounded-[2rem] border border-zinc-900 shadow-xl flex flex-col gap-3"
                >
                  <img 
                    src={img.url} 
                    className="w-full h-72 object-cover rounded-[1.5rem]" 
                    alt={`Us ${i}`}
                    onError={(e) => { e.target.src = "https://placehold.co/400x500/111/444?text=Cute+Photo+Here"; }}
                  />
                  {img.caption && (
                    <p className="text-zinc-400 text-center text-xs italic px-2 py-1 font-light">
                      {img.caption}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="h-14"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}