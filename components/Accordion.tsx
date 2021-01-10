import { useState } from 'react';
import AccordionElement from './AccordionElement'

export default function Accordion({ data }) {
    
  const handleChange = () => {};
  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionElement heading={item.heading}>
          {item.content}
        </AccordionElement>
      ))}
    </div>
  );
}
