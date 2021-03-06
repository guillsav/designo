import { Hero, Features, Values } from './components';
import { GetInTouch } from '../../components';

export const Homepage = () => {
  return (
    <>
      <div className="md:max-w-5xl container md:mx-auto md:px-6 xl:px-0">
        <Hero />
        <Features />
        <Values />
      </div>
      <GetInTouch />
    </>
  );
};
