import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function App() {
  const [page, setPage] = useState('home');

// ΕΔΩ ΟΡΙΖΕΙΣ ΤΑ ΓΛΥΚΑ, ΤΑ ΑΣΤΕΡΙΑ ΚΑΙ ΤΟ ΔΙΚΟ ΣΟΥ ΣΧΟΛΙΟ ΠΟΥ ΘΑ ΜΕΝΕΙ ΓΙΑ ΠΑΝΤΑ
  const sweets = [
    { 
      name: "Βάφλα Bueno", 
      price: "7.50€", 
      image: "/vafli.jpg", 
      rating: 5, 
      review: "Η κορυφαία μας επιλογή! Φρέσκια βάφλα με πλούσια πραλίνα Bueno και τριμμένο μπισκότο." 
    },
    { 
      name: "Pancakes Chocolate", 
      price: "6.80€", 
      image: "/pancakes.jpg", 
      rating: 5, 
      review: "Αφράτα pancakes που λιώνουν στο στόμα με διπλή στρώση σοκολάτας." 
    },
    { 
      name: "Cheesecake Φράουλα", 
      price: "5.50€", 
      image: "/cheesecake.jpg", 
      rating: 4, 
      review: "Δροσερό και ελαφρύ, με χειροποίητη μαρμελάδα από φρέσκιες φράουλες." 
    },
    { 
      name: "Σουφλέ Σοκολάτας", 
      price: "6.00€", 
      image: "/souffle.jpg", 
      rating: 5, 
      review: "Ζεστό σουφλέ με ρευστή σοκολάτα υγείας. Συνοδεύεται τέλεια με παγωτό βανίλια." 
    }
  ];


  const galleryImages = [
    "/image_0.jpeg", // Βάλε εδώ τα ονόματα των αρχείων που έχεις στο public
    "/image_1.jpeg"
  ];
  ;

return (
    <div style={{ backgroundColor: '#0a0a0a' }} className="min-h-screen w-full flex flex-col items-center">
      
      {/* ΧΟΡΟΠΗΔΗΧΤΟ ΓΛΥΚΟ */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-6 right-6 text-5xl z-50 pointer-events-none"
      >
        🍰
      </motion.div>

      <AnimatePresence mode="wait">
        {page === 'home' && (
          <motion.div 
            key="home"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center min-h-screen w-full px-6 text-center"
          >
            <h1 style={{ color: '#f59e0b' }} className="text-4xl font-black mb-2 italic uppercase">
              Sweet Decor
            </h1>
            <p className="text-zinc-500 mb-12 text-xs tracking-widest uppercase font-light">
              Dessert & Pastry Menu
            </p>
            
            <div className="flex flex-col w-full max-w-[280px] gap-4">
              <button onClick={() => setPage('menu')} className="w-full bg-zinc-100 text-black py-5 rounded-2xl font-bold text-lg shadow-lg">
                📜 ΤΑ ΓΛΥΚΑ ΜΑΣ
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
            className="w-full max-w-md p-6 flex flex-col"
          >
            <button onClick={() => setPage('home')} className="text-amber-500 mb-8 font-bold self-start">← ΠΙΣΩ</button>
            <h2 style={{ color: '#f59e0b' }} className="text-3xl font-black mb-8 border-b border-zinc-800 pb-2 italic">MENU</h2>
            
            <div className="space-y-8">
              {sweets.map((sweet, i) => (
                <div key={i} className="bg-zinc-900/50 p-4 rounded-3xl border border-zinc-900 text-white flex flex-col gap-4">
                  
                  {/* Φωτογραφία Γλυκού */}
                  <img 
                    src={sweet.image} 
                    className="w-full h-48 object-cover rounded-2xl border border-zinc-800"
                    alt={sweet.name}
                    onError={(e) => { e.target.src = "https://placehold.co/500x300/111/444?text=Γλυκό"; }}
                  />
                  
                  {/* Όνομα και Τιμή */}
                  <div className="flex justify-between items-center px-1">
                    <span className="text-xl font-bold">{sweet.name}</span>
                    <span className="font-mono text-amber-500 font-bold text-lg">{sweet.price}</span>
                  </div>

                  {/* Το Δικό Σου Μόνιμο Σχόλιο με Αστέρια */}
                  <div className="bg-black/40 p-3 rounded-xl border border-zinc-800/50 text-sm">
                    <div className="text-amber-400 mb-1">
                      {"⭐".repeat(sweet.rating)}
                    </div>
                    <p className="text-zinc-300 italic">"{sweet.review}"</p>
                  </div>

                </div>
              ))}
            </div>
            <div className="h-10"></div>
          </motion.div>
        )}

        {page === 'gallery' && (
          <motion.div 
            key="gallery"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="w-full max-w-md p-6 flex flex-col items-center"
          >
            <button onClick={() => setPage('home')} className="text-amber-500 mb-6 font-bold self-start text-sm">← ΠΙΣΩ</button>
            <h2 style={{ color: '#f59e0b' }} className="text-2xl font-black mb-6 text-center italic uppercase tracking-widest">GALLERY</h2>
            
            <div className="grid grid-cols-1 gap-4 w-full">
              {galleryImages.map((url, i) => (
                <img 
                  key={i} src={url} 
                  className="w-full h-64 object-cover rounded-2xl border border-zinc-900" 
                  alt={`Gallery ${i}`}
                  onError={(e) => { e.target.src = "https://placehold.co/500x300/111/444?text=Photo"; }}
                />
              ))}
            </div>
            <div className="h-10"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}