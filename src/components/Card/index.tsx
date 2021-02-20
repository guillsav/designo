import { Link } from 'react-router-dom';
import { Button } from '../button';
import { Heading } from '../heading';
import { ChevronRight } from '../svg';

interface Props {
  feature?: {
    id: number;
    name: string;
    thumbnail: string;
    to: string;
  };
  type: string;
  title?: string;
  text?: string;
  body?: string;
  btnText?: string | undefined;
}

export const Card = ({ feature, type, title, body, btnText }: Props) => {
  const featureCardElement =
    feature && type === 'feature' ? (
      <Link to={`/${feature.to}`}>
        <div
          className="w-full flex flex-col py-32 text-white rounded-xl items-center justify-center h-40 lg:h-full text-center mt-6 md:py-24"
          style={{
            background: `url(${feature.thumbnail}) center/cover no-repeat`,
            objectFit: 'contain'
          }}>
          <h3 className="uppercase font-medium text-3xl">{feature.name}</h3>
          <button className="mt-4 flex mx-auto items-center focus:outline-none">
            <span className="mr-4 tracking-xl uppercase text-btn-text font-medium">
              view projects
            </span>
            <ChevronRight />
          </button>
        </div>
      </Link>
    ) : null;

  const displayCardElement =
    type === 'display' ? (
      <div className="w-full px-10 py-16 bg-japonica-500 rounded-xl flex flex-col lg:flex-row lg:justify-between items-center justify-start text-center lg:text-left lg:px-24">
        <div className="lg:w-1/2 sm:px-16 lg:px-0">
          <Heading
            text={title}
            className="lg:w-3/4 lg:text-left text-4xl text-white font-medium text-center mb-5 font-sans"
          />

          <span className="text-base-sm text-white font-sans lg:px-0">
            {body}
          </span>
        </div>
        <Button text={btnText} className="mt-8 lg:mt-0 z-10" />
      </div>
    ) : null;

  return (
    <>
      {featureCardElement}
      {displayCardElement}
    </>
  );
};
