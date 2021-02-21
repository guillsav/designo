import { Heading } from '../heading';

interface Props {
  type: string;
  title: string;
  description: string;
  image?: string;
}

export const SharedHeader = ({ type, title, description, image }: Props) => {
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

  const flexHeaderElement = type === 'flex' ? <></> : null;

  const contactHeaderElement = type === 'contact' ? <></> : null;

  return (
    <>
      {thinHeaderElement}
      {flexHeaderElement}
      {contactHeaderElement}
    </>
  );
};
