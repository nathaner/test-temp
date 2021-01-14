import NextHead from 'next/head';

type Props = {
  title: string;
  description: string;
};

export const Head: React.FC<Props> = ({ title, description }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="robots" content="noindex" />
      <meta name="Description" content={description} />
    </NextHead>
  );
};

export default Head;
