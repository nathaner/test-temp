import AccordionElement from './AccordionElement'

export default function Accordion({ data }) {
    
  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionElement heading={item.heading} key={index}>
          {item.content}
        </AccordionElement>
      ))}
    </div>
  );
}
