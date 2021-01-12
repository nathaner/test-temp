import { useState } from 'react';
import Chevron from './common/Chevron';

export default function AccordionElement({ heading, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={'question ' + (isOpen ? 'opened' : 'closed')}>
      <h4 onClick={handleChange}>
        {heading}
        <div>
          {isOpen ? <Chevron /> : <Chevron orientation="LEFT" />}
        </div>
      </h4>
      <p>{children}</p>
    </div>
  );
}
