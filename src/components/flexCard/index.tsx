import { Heading } from '../heading';

interface Props {
  thumbnail: string;
  alt: string;
  title: string;
  text: string;
  bg?: string;
}

export const FlexCard = ({
  thumbnail,
  alt,
  title,
  text,
  bg
}: Props): JSX.Element => (
  <div className="w-full flex flex-col justify-start mt-10 md:mt-8 md:flex-row lg:flex-col lg:h-full">
    <div
      className={`${
        bg
          ? `${bg} flex justify-center pt-12 rounded-t-2xl md:w-1/2 md:rounded-tr-none md:rounded-bl-2xl lg:rounded-bl-none lg:rounded-tr-2xl lg:w-full lg:h-full`
          : 'md:w-1/2 lg:w-full lg:h-full'
      }`}>
      <img
        src={thumbnail}
        alt={alt}
        className={`${
          bg
            ? 'lg:w-full lg:h-full object-cover'
            : 'rounded-t-2xl md:w-full md:rounded-tr-none md:rounded-bl-2xl lg:rounded-bl-none lg:rounded-tr-2xl lg:w-full lg:h-full object-cover'
        }`}
      />
    </div>

    <div className="bg-provincialPink-500 px-10 py-8 rounded-b-2xl flex flex-col items-center justify-start md:w-1/2 text-center md:rounded-bl-none md:rounded-tr-2xl md:items-center md:justify-center lg:rounded-tr-none lg:rounded-bl-2xl lg:w-full lg:px-8">
      <Heading
        text={title}
        className="text-japonica-500 font-medium tracking-xl uppercase md:text-xl"
      />
      <p className="text-base text-shipGray-500 mt-4">{text}</p>
    </div>
  </div>
);
