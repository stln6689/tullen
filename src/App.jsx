import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Instagram, Mail, X } from 'lucide-react';

// LOCAL ASSET IMPORTS
import logoImg from './assets/tullen_cursive_final_logo.png';
import hoodieImg from './assets/tullen_varsity_hoodie.png';
import shirtImg from './assets/tullen_battery_shirt.png';

// PREVIEW
const logoDisplay = logoImg; 
const hoodieDisplay = hoodieImg;
const shirtDisplay = shirtImg;

const products = [
  {
    id: 1,
    name: "varsity athletics hoodie",
    image: hoodieDisplay, 
    price: "$50"
  },
  {
    id: 2,
    name: "battery signature shirt",
    image: shirtDisplay,
    price: "$30"
  }
];

export default function App() {
  const { scrollYProgress } = useScroll();
  const [showAbout, setShowAbout] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.title = "TULLEN";
    
    // Favicon update
    const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = '/plusminus_tablogo.png'; 
    document.getElementsByTagName('head')[0].appendChild(link);

    // Responsive check
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const opacityQuote = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const scaleQuote = useTransform(scrollYProgress, [0, 0.05], [1, 0.98]);

  const scrollToCollection = (e) => {
    e.preventDefault();
    setShowAbout(false);
    const element = document.getElementById('collection-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const goHome = () => {
    setShowAbout(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: 'white', minHeight: '200vh', color: 'black', width: '100%', margin: 0, padding: 0 }} className="selection:bg-yellow-100 selection:text-yellow-900 overflow-x-hidden">
      
      {/* 1. FIXED HEADER - RESPONSIVE */}
      <header style={{ 
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 150, 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: isMobile ? '15px 20px' : '25px 40px', 
        backgroundColor: 'rgba(255,255,255,0.9)', 
        backdropFilter: 'blur(10px)',
        boxSizing: 'border-box', 
        borderBottom: '1px solid #f2f2f2',
        gap: isMobile ? '10px' : '0'
      }}>
        <div onClick={goHome} style={{ width: isMobile ? '110px' : '140px', cursor: 'pointer' }}>
          <img 
            src={logoImg} 
            alt="weartullen.co logo" 
            style={{ width: '100%', height: 'auto', display: 'block' }} 
            onError={(e) => { e.target.src = PLACEHOLDER_LOGO; }}
          />
        </div>

        <nav style={{ display: 'flex', gap: isMobile ? '25px' : '60px' }}>
          <button 
            onClick={() => setShowAbout(true)}
            style={{ 
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: '"Libre Bodoni", serif', fontSize: isMobile ? '16px' : '24px', 
              color: 'black', padding: 0 
            }}>about</button>
          
          <a href="#collection" onClick={scrollToCollection} style={{ 
            fontFamily: '"Libre Bodoni", serif', fontSize: isMobile ? '16px' : '24px', 
            color: 'black', textDecoration: 'none'
          }}>collection</a>
          
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfA-FnD-f3pPoqqDQOh5lvjGLDn27uXJxBck-QcDItM_rSCxg/viewform" 
             target="_blank" rel="noreferrer"
             style={{ 
              fontFamily: '"Libre Bodoni", serif', fontSize: isMobile ? '16px' : '24px', 
              color: 'black', textDecoration: 'none'
            }}>order</a>
        </nav>
      </header>

      {/* 2. HERO SECTION */}
      <section style={{ 
        height: '100vh', width: '100%', display: 'flex', alignItems: 'center', 
        justifyContent: 'center', position: 'sticky', top: 0, zIndex: 10, pointerEvents: 'none' 
      }}>
        <motion.div 
          style={{ opacity: opacityQuote, scale: scaleQuote, textAlign: 'center', padding: '0 20px' }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 style={{ 
            fontSize: 'clamp(22px, 6vw, 40px)', fontStyle: 'italic', fontWeight: 'normal',
            color: '#B48C36', lineHeight: 1.4, maxWidth: '850px', margin: '0 auto', 
            fontFamily: '"Bodoni 72 Oldstyle", "Bodoni MT", serif' 
          }}>
            Built on resilience,<br /> driven by passion.
          </h1>
        </motion.div>
      </section>

      {/* 3. VAULT / COLLECTION SECTION */}
      <section id="collection-section" style={{ 
        position: 'relative', zIndex: 20, backgroundColor: 'white', 
        paddingTop: isMobile ? '80px' : '120px', paddingBottom: '120px', width: '100%', 
        borderTop: '1px solid #eee' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: isMobile ? '60px' : '100px' }}
          >
            <h2 style={{ 
              fontSize: 'clamp(50px, 14vw, 190px)', fontWeight: '900', color: '#B48C36', 
              margin: 0, letterSpacing: '-0.06em', textTransform: 'uppercase', lineHeight: 0.9 
            }}>Vault 001</h2>
            <p style={{ 
              fontSize: 'clamp(18px, 4vw, 36px)', fontStyle: 'italic', color: 'black', 
              letterSpacing: '0.1em', textTransform: 'lowercase', marginTop: '15px',
              fontFamily: '"Bodoni 72 Oldstyle", "Bodoni MT", serif'
            }}>for the everyday human being.</p>
          </motion.div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: isMobile ? '50px' : '80px', width: '100%' 
          }}>
            {products.map((product) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ 
                  width: '100%', aspectRatio: '4/5', backgroundColor: '#fafafa', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  marginBottom: '20px', overflow: 'hidden' 
                }}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    style={{ maxHeight: '88%', maxWidth: '88%', objectFit: 'contain' }}
                    onError={(e) => { e.target.src = product.fallback; }}
                  />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h3 style={{ 
                    fontSize: isMobile ? '18px' : '24px', textTransform: 'uppercase', letterSpacing: '0.25em', 
                    fontWeight: 'bold', margin: '0 0 10px 0' 
                  }}>{product.name}</h3>
                  <p style={{ fontSize: isMobile ? '16px' : '20px', color: '#bbb', textTransform: 'uppercase', letterSpacing: '0.15em' }}>{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOOTER - RESPONSIVE WRAP */}
      <footer style={{ 
        position: 'relative', zIndex: 30, backgroundColor: 'white', 
        padding: isMobile ? '80px 20px' : '120px 20px', borderTop: '1px solid #eee', 
        display: 'flex', flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center', justifyContent: 'center', gap: isMobile ? '30px' : '60px' 
      }}>
        <a href="https://instagram.com/tullen.co" target="_blank" rel="noreferrer" style={{ 
          display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', 
          color: '#999', fontSize: isMobile ? '14px' : '20px', letterSpacing: '0.2em', textTransform: 'uppercase' 
        }}>
           <Instagram size={isMobile ? 20 : 28}/>
           <span>@tullen.co</span>
        </a>
        <a href="mailto:contact.tullen@gmail.com" style={{ 
          display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', 
          color: '#999', fontSize: isMobile ? '14px' : '20px', letterSpacing: '0.2em', textTransform: 'uppercase' 
        }}>
           <Mail size={isMobile ? 20 : 28}/>
           <span style={{ wordBreak: 'break-all', textAlign: 'center' }}>contact.tullen@gmail.com</span>
        </a>
      </footer>

      {/* ABOUT PAGE OVERLAY */}
      <AnimatePresence>
        {showAbout && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
              width: '100%', height: '100%',
              backgroundColor: 'white', zIndex: 1000, 
              display: 'flex', flexDirection: 'column', 
              boxSizing: 'border-box', overflow: 'hidden'
            }}
          >
            <button 
              onClick={() => setShowAbout(false)}
              style={{ position: 'absolute', top: isMobile ? '20px' : '40px', right: isMobile ? '20px' : '40px', background: 'none', border: 'none', cursor: 'pointer', color: 'black', zIndex: 1010 }}
            >
              <X size={24} />
            </button>

            <div style={{ 
              flex: 1, display: 'flex', flexDirection: 'column', 
              alignItems: 'center', justifyContent: 'center', width: '100%' 
            }}>
              <div style={{ textAlign: 'center', maxWidth: '600px', width: '100%', padding: '0 20px', boxSizing: 'border-box' }}>
                <h2 style={{ fontFamily: '"Libre Bodoni", serif', fontSize: isMobile ? '24px' : '32px', marginBottom: isMobile ? '30px' : '50px', fontStyle: 'italic' }}>our team</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '20px' : '25px', color: '#444' }}>
                  <p style={{ letterSpacing: '0.1em', fontSize: isMobile ? '14px' : '16px' }}><span style={{ fontWeight: 'bold', color: 'black', textTransform: 'uppercase', fontSize: '11px' }}>founder:</span><br/><a href="https://www.instagram.com/marktullen/" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>mark tullen (@marktullen)</a></p>
                  <p style={{ letterSpacing: '0.1em', fontSize: isMobile ? '14px' : '16px' }}><span style={{ fontWeight: 'bold', color: 'black', textTransform: 'uppercase', fontSize: '11px' }}>brand advisor:</span><br/><a href="https://www.instagram.com/choychaser/" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>nick (@choychaser)</a></p>
                  <p style={{ letterSpacing: '0.1em', fontSize: isMobile ? '14px' : '16px' }}><span style={{ fontWeight: 'bold', color: 'black', textTransform: 'uppercase', fontSize: '11px' }}>clothing & web designer:</span><br/><a href="https://www.instagram.com/sqvxlo/" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>sophie (@sqvxlo & @bophee_)</a></p>
                  <p style={{ letterSpacing: '0.1em', fontSize: isMobile ? '14px' : '16px' }}><span style={{ fontWeight: 'bold', color: 'black', textTransform: 'uppercase', fontSize: '11px' }}>videographer & media:</span><br/><a href="https://www.instagram.com/okaybustin/" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>justin (@okaybustin)</a></p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}