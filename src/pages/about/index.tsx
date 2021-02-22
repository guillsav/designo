import { Heading, SharedHeader } from '../../components';
import headerIMG from './assets/headerIMG.png';
import contentIMG from './assets/contentImg.png';
import realDealIMG from './assets/realDealIMG.png';
import {
  AustraliaIcon,
  CanadaIcon,
  UnitedKingdomIcon
} from '../../components/svg';
import { Button } from '../../components/button';

export const About = () => {
  return (
    <div className="md:max-w-5xl container mx-auto md:px-6 xl:px-0">
      <SharedHeader
        type="flex"
        title="About Us"
        description="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences."
        image={headerIMG}
        alt="team-work"
      />

      <div className=" flex flex-col items-center lg:flex-row lg:h-lg md:mt-32">
        <img
          className="h-80 w-full md:h-md1 md:w-full lg:w-2/5 lg:h-lg object-cover md:object-center md:rounded-tr-2xl md:rounded-tl-2xl md:rounded-br-none lg:rounded-tl-2xl lg:rounded-tr-none lg:rounded-bl-2xl lg:rounded-br-none"
          src={contentIMG}
          alt="content"
        />
        <div className="lg:w-3/5 md:w-full bg-provincialPink-500 lg:h-lg text-center lg:text-left py-20 px-6 md:px-6 lg:px-24 md:py-16 md:px-20 md:rounded-br-2xl md:rounded-bl-2xl lg:py-32 md:rounded-tr-none md:rounded-br-none lg:rounded-br-2xl lg:rounded-bl-none lg:rounded-tl-none lg:rounded-2xl">
          <Heading
            className="text-japonica-500 font-medium text-heading-md font-sans md:text-5xl"
            text="World-class talent"
          />
          <p className="text-base-sm text-shipGray-500 font-sans mt-6 md:text-base">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p className="text-base-sm text-shipGray-500 font-sans mt-6 md:text-base">
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </div>

      <div className="mt-32 px-6 flex flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full flex flex-col items-center text-center">
          <CanadaIcon />
          <h6 className="text-xl text-shipGray-500 tracking-xl font-medium uppercase mt-12">
            Canada
          </h6>
          <Button
            type="primary"
            className="bg-japonica-500 text-white uppercase font-medium text-base-sm mt-8 lg:hover:bg-opacity-60 lg:transition-all lg:duration-200"
            text="see location"
          />
        </div>
        <div className="w-full flex flex-col items-center text-center mt-12 lg:mt-0">
          <AustraliaIcon />
          <h6 className="text-xl text-shipGray-500 tracking-xl font-medium uppercase mt-12">
            Australia
          </h6>
          <Button
            type="primary"
            className="bg-japonica-500 text-white uppercase font-medium text-base-sm mt-8 lg:hover:bg-opacity-60 lg:transition-all lg:duration-200"
            text="see location"
          />
        </div>
        <div className="w-full flex flex-col items-center text-center mt-12 lg:mt-0">
          <UnitedKingdomIcon />
          <h6 className="text-xl text-shipGray-500 tracking-xl font-medium uppercase mt-12">
            United Kingdom
          </h6>
          <Button
            type="primary"
            className="bg-japonica-500 text-white uppercase font-medium text-base-sm mt-8 lg:hover:bg-opacity-60 lg:transition-all lg:duration-200"
            text="see location"
          />
        </div>
      </div>

      <div className=" flex flex-col-reverse items-center lg:flex-row lg:h-lg mt-32">
        <div className="lg:w-3/5 md:w-full bg-provincialPink-500 lg:h-lg text-center lg:text-left py-20 px-6 md:px-6 lg:px-24 md:py-16 md:px-20 md:rounded-br-2xl md:rounded-bl-2xl lg:py-32 md:rounded-tr-none md:rounded-br-none lg:rounded-br-none lg:rounded-bl-2xl lg:rounded-tl-2xl lg:rounded-tr-none md:flex md:flex-col md:items-center md:justify-start lg:items-start lg:justify-center ">
          <Heading
            className="text-japonica-500 font-medium text-heading-md font-sans md:text-5xl"
            text="The real deal"
          />
          <p className="text-base-sm text-shipGray-500 font-sans mt-6 md:text-base">
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p className="text-base-sm text-shipGray-500 font-sans mt-6 md:text-base">
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
        <img
          className="h-80 w-full md:h-md1 md:w-full lg:w-2/5 lg:h-lg object-cover md:object-center md:rounded-tr-2xl md:rounded-tl-2xl md:rounded-br-none lg:rounded-tl-none lg:rounded-tr-2xl lg:rounded-bl-none lg:rounded-br-2xl"
          src={realDealIMG}
          alt="real-deal"
        />
      </div>
    </div>
  );
};
