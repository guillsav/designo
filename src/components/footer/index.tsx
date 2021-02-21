import { NavLink } from 'react-router-dom';
import { SocialMedia } from '../svg';
import LogoMark from './assets/logo-mark.png';

export const Footer = () => (
  <footer className="bg-shark-500 relative -mt-46  md:-mt-22 lg:-mt-18 z-0 w-full pt-64 md:pt-42 lg:pt-36 pb-16 px-6">
    <div className="md:max-w-5xl container md:mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h2 className="font-logo text-white text-2xl tracking-xl font-bold uppercase flex items-center justify-center">
          <img
            src={LogoMark}
            alt="designo logo mark"
            className="w-6 h-6 mr-3 -mt-1"
          />
          designo
        </h2>
        <div className="h-px w-full bg-white opacity-10 mt-8 md:hidden" />
        <nav className="mt-8 md:mt-0">
          <ul className="text-center md:flex md:flex-row md:justify-center md:items-center">
            <li>
              <NavLink
                to="/about"
                className="uppercase text-white tracking-widest text-sm">
                our company
              </NavLink>
            </li>
            <li className="mt-6 md:mt-0">
              <NavLink
                to="/locations"
                className="uppercase text-white tracking-widest text-sm md:ml-11">
                locations
              </NavLink>
            </li>
            <li className="mt-6 md:mt-0">
              <NavLink
                to="/contact"
                className="uppercase text-white tracking-widest text-sm md:ml-11">
                contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hidden h-px w-full bg-white opacity-10 mt-8 md:block" />
      <div className="mt-8 w-full">
        <div className="md:flex md:flex-row md:items-start md:justify-between">
          <div className="text-center mt-10 px-14 md:px-0 md:text-left">
            <h4 className="font-sans text-base text-white font-bold opacity-50 leading-6">
              Designo Central Office
            </h4>
            <p className="font-sans text-base text-white opacity-50 leading-6">
              3886 Wellington Street
            </p>
            <p className="font-sans text-base text-white opacity-50 leading-6">
              Toronto, Ontario M9C 3J5
            </p>
          </div>
          <div className="text-center mt-10 px-14 md:px-0 md:text-left">
            <h4 className="font-sans text-base text-white font-bold opacity-50 leading-6">
              Contact Us (Central Office)
            </h4>
            <p className="font-sans text-base text-white opacity-50 md:font-bold leading-6">
              P : +1 253-863-896
            </p>
            <p className="font-sans text-base text-white opacity-50 md:font-bold leading-6">
              M : contact@designo.co
            </p>
          </div>
          <div className="mt-8 flex justify-center items-start md:mt-20">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  </footer>
);
