import { Heading } from '../heading';

interface Props {
  type?: string;
  title: string;
  description: string;
  image?: string;
  alt?: string;
}

export const SharedHeader = ({
  type,
  title,
  description,
  image,
  alt
}: Props) => {
  const thinHeaderElement =
    type === 'thin' ? (
      <div className="w-full bg-japonica-500 text-center py-28 px-6 md:py-16 md:px-40 md:rounded-xl">
        <div className="lg:w-2/3 lg:mx-auto lg:px-6 xl:px-8">
          <Heading
            className="text-white font-medium text-heading-md font-sans md:text-5xl"
            text={title}
          />
          <p className="text-base-sm text-white font-sans mt-6 md:text-base">
            {description}
          </p>
        </div>
      </div>
    ) : null;

  const flexHeaderElement =
    type === 'flex' ? (
      <div className=" flex flex-col-reverse items-center lg:flex-row lg:h-md2 xl:w-full">
        <div className="lg:3/5 md:w-full lg:h-full bg-japonica-500 text-center lg:text-left py-28 px-6 md:px-6 lg:px-24 md:py-16 md:px-20 md:rounded-br-2xl md:rounded-bl-2xl lg:py-32 md:rounded-tr-none md:rounded-br-none lg:rounded-br-none lg:rounded-tl-2xl">
          <Heading
            className="text-white font-medium text-heading-md font-sans md:text-5xl"
            text={title}
          />
          <p className="text-base-sm text-white font-sans mt-6 md:text-base">
            {description}
          </p>
        </div>
        {image && alt && (
          <img
            className="h-80 w-full md:h-md1 md:w-full lg:w-2/5 lg:h-full object-cover md:rounded-tr-2xl lg:rounded-br-2xl md:rounded-tl-2xl md:rounded-br-none lg:rounded-tl-none"
            src={image}
            alt={alt}
          />
        )}
      </div>
    ) : null;

  const contactHeaderElement = type === 'contact' ? <></> : null;

  return (
    <>
      {thinHeaderElement}
      {flexHeaderElement}
      {contactHeaderElement}
    </>
  );
};
