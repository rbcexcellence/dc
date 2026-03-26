import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import AGB from './pages/AGB';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const reportOverflow = () => {
      const docEl = document.documentElement;
      const viewportWidth = docEl.clientWidth;

      const offenders = [];
      document.querySelectorAll('body *').forEach((el) => {
        const rect = el.getBoundingClientRect();
        const overflowRight = rect.right - viewportWidth;
        if (overflowRight > 1) {
          offenders.push({
            el,
            overflowRight: Math.round(overflowRight),
            width: Math.round(rect.width),
            right: Math.round(rect.right),
          });
        }
      });

      offenders.sort((a, b) => b.overflowRight - a.overflowRight);

      if (offenders.length) {
        // eslint-disable-next-line no-console
        console.groupCollapsed(`[overflow-x] ${offenders.length} element(s) overflow viewport (${viewportWidth}px)`);
        offenders.slice(0, 15).forEach(({ el, overflowRight, width, right }) => {
          // eslint-disable-next-line no-console
          console.log(`+${overflowRight}px`, el, { width, right });
        });
        // eslint-disable-next-line no-console
        console.groupEnd();
      }
    };

    const onResize = () => reportOverflow();
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
    const timeout = window.setTimeout(reportOverflow, 300);

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
