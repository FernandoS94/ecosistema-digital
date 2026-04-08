import { useState } from 'react';

export function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item${open ? ' active' : ''}`} onClick={() => setOpen(!open)}>
      <div className="faq-question">
        <h3>{question}</h3>
        <span className="faq-icon">▼</span>
      </div>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
}
