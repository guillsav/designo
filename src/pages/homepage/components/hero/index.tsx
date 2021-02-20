import { Heading } from '../../../../components';
import { Button } from '../../../../components/button';
import iphoneImageMobile from './assets/black_front copy 5.png';
import iphoneImageDesktop from './assets/black_front copy 4.png';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-japonica-500 text-center lg:text-left px-6 sm:px-8 md:px-0 md:rounded-xl overflow-hidden">
      <div className="mx-auto flex flex-col lg:flex-row justify-start items-center mt-20 lg:mt-0">
        <div>
          <Heading
            text="Award-winning custom designs and digital branding solutions"
            className="text-sans text-white font-medium text-heading-md font-sans md:text-5xl md:px-24 lg:mt-14"
          />
          <p className="w-full lg:w-11/12 text-white text-base-sm md:text-base mt-8 font-sans md:px-28 lg:px-24">
            <span className="md:px-6 lg:px-0">
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </span>
          </p>
          <Button text="learn more" className="mt-6 lg:ml-24" />
        </div>

        <img
          src={iphoneImageMobile}
          alt="iphone"
          className="w-72 mt-16 lg:hidden"
        />
        <img
          src={iphoneImageDesktop}
          alt="iphone"
          className="hidden lg:inline-block w-72 mt-34 lg:w-60 lg:mr-24"
        />
      </div>
    </section>
  );
};
