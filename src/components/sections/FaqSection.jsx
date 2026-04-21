import { FaqItem } from '../ui/FaqItem';
import { FAQ_ITEMS } from '../../data/faq';

export function FaqSection() {
  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2 className="faq-title">Preguntas frecuentes</h2>
        <div className="faq-container">
          {FAQ_ITEMS.map((item) => (
            <FaqItem key={item.id} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
