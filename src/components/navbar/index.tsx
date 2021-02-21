import { NavLink, Link } from 'react-router-dom';
import { MenuIcon } from '../svg';
import LogoMark from './assets/logo-mark.png';

export const Navbar = () => {
  return (
    <header className="px-6 xl:px-0 py-9 md:max-w-5xl container md:mx-auto md:py-0 md:my-16">
      <nav>
        <div className="flex justify-between items-center">
          <Link to="/">
            <div className="flex items-center">
              <img src={LogoMark} alt="designo logo mark" className="w-6 h-6" />
              <h1 className="ml-3 h-7 font-bold text-shipGray-500 tracking-xl text-2xl font-logo uppercase">
                designo
              </h1>
            </div>
          </Link>
          <button className="focus:outline-none">
            <MenuIcon className="w-6 h-auto md:hidden" />
          </button>
          <ul className="hidden md:flex items-center justify-between">
            <li>
              <NavLink
                className="font-sans text-shipGray-500 tracking-wider text-sm uppercase"
                to="/about">
                our company
              </NavLink>
            </li>
            <li>
              <NavLink
                className="font-sans text-shipGray-500 tracking-wider ml-10 text-sm uppercase"
                to="/locations">
                locations
              </NavLink>
            </li>
            <li>
              <NavLink
                className="font-sans text-shipGray-500 tracking-wider ml-10 text-sm uppercase"
                to="/contact">
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
