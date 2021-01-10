import { useState } from 'react';
import ChevronDown from './common/ChevronDown';
import ChevronLeft from './common/ChevronLeft';

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
          {isOpen ? <ChevronDown /> : <ChevronLeft />}
        </div>
      </h4>
      <p>{children}</p>
    </div>
  );
}
