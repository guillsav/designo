import { Heading } from '../heading';

interface Props {
  type?: string;
  title: string;
  addressHeader?: string;
  description?: string;
  address?: string;
  phone?: string;
  email?: string;
  image?: string;
  alt?: string;
}

const center = { lat: 43.65107, lng: -79.347015 };
const zoom = 8;

export const SharedHeader = ({
  type,
  title,
  addressHeader,
  address,
  description,
  phone,
  email,
  image,
  alt
}: Props) => {
  const thinHeaderElement =
    type === 'thin' ? (
      <div className="w-full px-6 text-center bg-japonica-500 py-28 md:py-16 md:px-40 md:rounded-xl">
        <div className="lg:w-2/3 lg:mx-auto lg:px-6 xl:px-8">
          <Heading
            className="font-sans font-medium text-white text-heading-md md:text-5xl"
            text={title}
          />
          <p className="mt-6 font-sans text-white text-base-sm md:text-base">
            {description}
          </p>
        </div>
      </div>
    ) : null;

  const flexHeaderElement =
    type === 'flex' ? (
      <div className="flex flex-col-reverse items-center lg:flex-row lg:h-md2 xl:w-full">
        <div className="px-6 text-center lg:3/5 md:w-full lg:h-full bg-japonica-500 lg:text-left py-28 lg:px-24 md:py-16 md:px-20 md:rounded-br-2xl md:rounded-bl-2xl lg:py-32 md:rounded-tr-none lg:rounded-br-none lg:rounded-tl-2xl">
          <Heading
            className="font-sans font-medium text-white text-heading-md md:text-5xl"
            text={title}
          />
          <p className="mt-6 font-sans text-white text-base-sm md:text-base">
            {description}
          </p>
        </div>
        {image && alt && (
          <img
            className="object-cover w-full h-80 md:h-md1 md:w-full lg:w-2/5 lg:h-full md:rounded-tr-2xl lg:rounded-br-2xl md:rounded-tl-2xl md:rounded-br-none lg:rounded-tl-none"
            src={image}
            alt={alt}
          />
        )}
      </div>
    ) : null;

  const mosaicHeaderElement =
    type === 'mosaic' ? (
      <div className="flex flex-col-reverse items-center w-full">
        <div className="w-full px-6 text-center bg-provincialPink-500 py-28">
          <Heading
            className="font-sans font-medium text-japonica-500 text-heading-md md:text-5xl"
            text={title}
          />
          <div>
            <Heading
              className="mt-6 font-sans text-base font-semibold text-shipGray-500"
              text={addressHeader}
            />

            <p className="px-32 font-sans text-shipGray-500 text-base-sm md:text-base">
              {address}
            </p>
          </div>
          <div>
            <Heading
              className="mt-6 font-sans text-base font-semibold text-shipGray-500"
              text="Contact"
            />
            <p className="px-32 font-sans text-shipGray-500 text-base-sm md:text-base">
              P : +1 {phone}
            </p>
            <p className="px-32 font-sans text-shipGray-500 text-base-sm md:text-base">
              M :{email}
            </p>
          </div>
        </div>
      </div>
    ) : null;

  const contactHeaderElement = type === 'contact' ? <></> : null;

  return (
    <>
      {thinHeaderElement}
      {flexHeaderElement}
      {mosaicHeaderElement}
      {contactHeaderElement}
    </>
  );
};
