import { useState, useEffect, useRef } from 'react';
import { AppCard } from '../ui/AppCard';
import { APPS } from '../../data/apps';

function getCardsPerView() {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 1024) return 2;
  return 3;
}

export function AppsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
  const carouselRef = useRef(null);
  const startXRef = useRef(0);

  const totalSlides = Math.ceil(APPS.length / cardsPerView);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
      setCurrentIndex(0);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!carouselRef.current) return;
    const cardEl = carouselRef.current.querySelector('.app-card-flip');
    if (!cardEl) return;
    const cardWidth = cardEl.offsetWidth + 20;
    const offset = currentIndex * cardWidth * cardsPerView;
    carouselRef.current.style.transform = `translateX(-${offset}px)`;
  }, [currentIndex, cardsPerView]);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(totalSlides - 1, i + 1));

  const handleTouchStart = (e) => { startXRef.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    const diff = startXRef.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
  };

  return (
    <section className="section apps-section" id="apps">
      <div className="container">
        <div className="header">
          <h2 className="section-title animate-on-scroll">Aplicaciones del Ecosistema</h2>
        </div>

        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={prev} disabled={currentIndex === 0}> <i className="fas fa-chevron-left"></i></button>

          <div className="carousel-wrapper">
            <div
              className="carousel"
              id="carousel"
              ref={carouselRef}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {APPS.map((app) => (
                <AppCard key={app.id} {...app} />
              ))}
            </div>
          </div>

          <button className="carousel-btn next" onClick={next} disabled={currentIndex >= totalSlides - 1}> <i className="fas fa-chevron-right"></i></button>

          <div className="carousel-dots" id="dots">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <div
                key={i}
                className={`dot${i === currentIndex ? ' active' : ''}`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
