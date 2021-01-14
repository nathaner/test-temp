type Props = {
    heading: string,
    imgSrc: string,
    imgAltText: string,
    children: React.FC,
    imgAlignment: 'LEFT' | 'RIGHT'
}

export default function ParagraphWithImage({
  heading,
  imgSrc,
  imgAltText,
  children,
}: Props) {
  return (
    <div className="row">
      <div>
        <h3>{heading}</h3>
        <p>
          {children}
        </p>
      </div>
      <div>
        <img src={imgSrc} alt={imgAltText} />
      </div>
    </div>
  );
}
