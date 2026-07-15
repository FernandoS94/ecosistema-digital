import { useState } from 'react';
import { FaqItem } from '../ui/FaqItem';
import { FAQ_ITEMS } from '../../data/faq';
import './FaqSectionColapsable.css';


export function FaqSectionColapsable() {
  const [abierta, setAbierta] = useState(false);

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <button
          className={`faq-toggle${abierta ? ' abierta' : ''}`}
          onClick={() => setAbierta(!abierta)}
          aria-expanded={abierta}
        >
          <div className="faq-toggle-left">
            <span className="faq-toggle-icon">
              <i className="fas fa-question-circle" aria-hidden="true"></i>
            </span>
            <h2 className="faq-title">Preguntas frecuentes</h2>
          </div>
          <span className="faq-toggle-chevron">
            <i className="fas fa-chevron-down" aria-hidden="true"></i>
          </span>
        </button>

        <div className={`faq-body${abierta ? ' faq-body--open' : ''}`}>
          <div className="faq-container">
            {FAQ_ITEMS.map((item) => (
              <FaqItem key={item.id} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
