import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function App() {
  const [page, setPage] = useState('home');

  // STATE ΓΙΑ ΤΟ ΕΠΙΚΟ EASTER EGG ΤΗΣ ΚΑΡΔΙΑΣ
  const [taps, setTaps] = useState(0);
  const maxTaps = 10; // Χρειάζονται 10 taps για να σκάσει
  const [showSurprise, setShowSurprise] = useState(false);

  const handleHeartClick = () => {
    if (taps >= maxTaps) {
      setShowSurprise(true);
      setTaps(0); // Reset μετά την έκπληξη
    } else {
      setTaps(prev => prev + 1);
    }
  };

  // ΟΡΓΑΝΩΣΗ ΜΕΝΟΥ
  const menuCategories = {
    savory: {
      title: "🍕 ΑΛΜΥΡΑ",
      items: [
        { name: "Pizza Carbonara", price: "8.50€", image: "/pizza.jpg", rating: 4, review: "Η πεστο ηταν καλυτερη επειδη την εφτιαξα εγω." }
      ]
    },
    sweets: {
      title: "🍰 ΓΛΥΚΑ",
      items: [
        { name: "Cookie", price: "5.50€", image: "/vafli.jpg", rating: 4, review: "Η σεφ με εβαλε να το φαω με το ζορι και με μεθυσε την ιδια μερα." },
        { name: "Pancakes Chocolate and Strawberry", price: "8.80€", image: "/pancakes.jpg", rating: 5, review: "Το καλυτερο πρωινο ξυπνημα. πανκεικς και την πιο ομορφη σεφ." }
        { name: "Bookie", price: "6.50€", image: "/vafli.jpg", rating: 3, review: "Ο μονος λογος που ηθελε να παω ειναι για να τα φτιαξει. Τα ζηλευω βαζω 3 αστερια!!!" },
      ]
    },
    drinks: {
      title: "🍸 ΠΟΤΑ & COCKTAILS",
      items: [
        { name: "Ρακί Καρπούζι", price: "6.00€", image: "/pornstar.jpg", rating: 3, review: "Για να μην το εχει πιει η αλκοολικια δεν λεει." }
      ]
    },
    premium: {
      title: "💎 ULTRA VIP EXPERIENCE",
      items: [
        { 
          name: "Ο ΜΑΙΚ Ο ΦΑΣΟΛΑΚΗΣ", 
          price: "ΑΝΕΚΤΙΜΗΤΟ 💎", // Η νέα εξωφρενική τιμή
          image: "image5.png", 
          review: "Δεν εξαγοράζεται με χρήματα. Σερβίρεται μόνο σε ειδικές περιστάσεις για αυτούς που ξέρουν να εκτιμούν την πραγματική αξία.",
          isPremium: true 
        }
        { 
          name: "Ο ΜΑΙΚ Ο ΦΑΣΟΛΑΚΗΣ", 
          price: "ΑΝΕΚΤΙΜΗΤΟ 💎", // Η νέα εξωφρενική τιμή
          image: "image10.jpeg", 
          review: "Δεν εξαγοράζεται με χρήματα. Σερβίρεται μόνο σε ειδικές περιστάσεις για αυτούς που ξέρουν να εκτιμούν την πραγματική αξία.",
          isPremium: true 
        }
      ]
    }
  };

  // ΟΙ ΦΩΤΟΓΡΑΦΙΕΣ ΣΑΣ ΓΙΑ ΤΗ GALLERY
  const galleryImages = [
    { url: "image12.jpg", caption: "Η πρώτη μου φωτογραφία σου" },
    { url: "image3.png", caption: "με το σαιντ τσικ 1" },
    { url: "image8.png", caption: "με το σαιντ τσικ 1 ΞΑΝΑ" },
    { url: "image2.png", caption: "εσυ οταν γινεσαι μπαντι" },
    { url: "image9.jpeg", caption: "Η ΑΓΑΠΗΜΕΝΗ ΜΟΥ...με το σαιντ τσικ 2" },
    { url: "image4.jpeg", caption: "οταν σου εκλεψα το σαιντι τσικ C:" },
    { url: "image6.png", caption: "Η 2η αγαπημενη μου" },
    { url: "facetime.png", caption: "γκουφι φεισταιμ" }
  ];

  return (
    <div style={{ backgroundColor: '#0a0a0a' }} className="min-h-screen w-full flex flex-col items-center overflow-x-hidden">
      
      {/* ANIMATED ΚΑΡΔΟΥΛΑ ΠΟΥ ΠΗΓΑΙΝΕΙ ΚΕΝΤΡΟ ΚΑΙ ΜΕΓΑΛΩΝΕΙ */}
      <motion.div 
        animate={taps === 0 ? {
          y: [0, -8, 0],
          scale: 1,
          x: 0
        } : {
          // Μετακίνηση προς το κέντρο και τρελό μεγάλωμα
          x: `-${(taps / maxTaps) * 42}vw`,
          y: `-${(taps / maxTaps) * 44}vh`,
          scale: 1 + taps * 0.8, // Αυξάνεται δραματικά σε κάθε tap
        }}
        transition={taps === 0 ? {
          y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
        } : {
          type: "spring", stiffness: 120, damping: 14
        }}
        onClick={handleHeartClick}
        className="fixed bottom-6 right-6 text-4xl z-40 cursor-pointer drop-shadow-[0_0_15px_rgba(239,68,68,0.8)] select-none active:scale-95 origin-center"
      >
        ❤️
      </motion.div>

      {/* ΟΘΟΝΗ ΕΚΠΛΗΞΗΣ (SURPRISE POPUP) */}
      <AnimatePresence>
        {showSurprise && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-6 text-center"
          >
            <motion.div 
              initial={{ scale: 0.3, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.3, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-zinc-950 p-4 rounded-[2.5rem] border border-amber-500/30 max-w-sm w-full shadow-[0_0_50px_rgba(245,158,11,0.25)] flex flex-col gap-4"
            >
              <img 
                src="image1.png" 
                className="w-full h-96 object-cover rounded-[1.5rem]" 
                alt="Surprise"
                onError={(e) => { e.target.src = "https://placehold.co/400x500/111/444?text=Our+Special+Moment+❤️"; }}
              />
              <p className="text-amber-400 font-black italic text-lg px-2 mt-1">
                Η μονη φωτογραφια που ειχαμε μαζι❤️
              </p>
              <button 
                onClick={() => setShowSurprise(false)}
                className="bg-zinc-900 text-zinc-400 hover:text-white py-2 rounded-xl text-xs font-bold transition-colors border border-zinc-800"
              >
                ❌ ΚΛΕΙΣΙΜΟ
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        
        {/* --- HOME PAGE --- */}
        {page === 'home' && (
          <motion.div 
            key="home"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center min-h-screen w-full px-6 text-center"
          >
            <h1 style={{ color: '#f59e0b' }} className="text-4xl font-black mb-1 italic uppercase tracking-tight">
              JOANNA'S HOME
            </h1>
            <p className="text-zinc-500 mb-12 text-xs tracking-widest uppercase font-light">
              Made with hate while rage-baited 😡
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
                    <h3 className={`font-black tracking-widest text-sm px-1 ${categoryKey === 'premium' ? 'text-amber-500 animate-pulse' : 'text-amber-500/80'}`}>
                      {category.title}
                    </h3>
                    
                    <div className="space-y-6">
                      {category.items.map((item, idx) => {
                        if (item.isPremium) {
                          return (
                            <div key={idx} className="relative bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-5 rounded-3xl border-2 border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.25)] text-white flex flex-col gap-4 overflow-visible my-6">
                              <span className="absolute -top-3 left-6 bg-amber-500 text-black font-black text-[9px] px-3 py-1 rounded-full tracking-widest uppercase shadow-md">
                                NOT FOR EVERYONE
                              </span>
                              <img 
                                src={item.image} 
                                className="w-full h-52 object-cover rounded-2xl border border-amber-500/30"
                                alt={item.name}
                                onError={(e) => { e.target.src = "https://placehold.co/500x300/1f1601/3a2902?text=💎+VIP"; }}
                              />
                              <div className="flex justify-between items-center px-1 gap-2">
                                <span className="text-xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">
                                  {item.name}
                                </span>
                                <span className="font-sans text-amber-400 font-black text-base whitespace-nowrap animate-pulse">
                                  {item.price}
                                </span>
                              </div>
                              <div className="relative bg-black/60 p-4 rounded-xl border border-amber-500/20 text-xs overflow-visible mt-2">
                                <div className="absolute -top-5 -right-4 flex text-2xl drop-shadow-[0_0_10px_rgba(245,158,11,0.9)] pointer-events-none select-none tracking-tighter">
                                  ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
                                </div>
                                <p className="text-amber-100/90 italic font-medium pr-10">
                                  "{item.review}"
                                </p>
                              </div>
                            </div>
                          );
                        }

                        return (
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
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="h-12"></div>
          </motion.div>
        )}

        {/* --- GALLERY PAGE --- */}
        {page === 'gallery' && (
          <motion.div 
            key="gallery"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="w-full max-w-md p-6 flex flex-col items-center"
          >
            <button onClick={() => setPage('home')} className="text-amber-500 mb-6 font-bold self-start text-sm">← ΠΙΣΩ</button>
            <h2 style={{ color: '#f59e0b' }} className="text-2xl font-black mb-2 text-center italic uppercase tracking-widest">MEMORIES</h2>
            <p className="text-zinc-600 text-xs mb-8 italic">LEAKS 🫣</p>
            
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