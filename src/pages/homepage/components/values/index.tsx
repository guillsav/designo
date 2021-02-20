import { Heading } from '../../../../components';
import { Passionate, Resourceful, Friendly } from '../../../../components/svg';

export const Values = () => {
  return (
    <section
      id="values"
      className="flex flex-col items-center justify-start container px-6 mt-32 xl:flex-row xl:items-start xl:justify-start xl:px-0">
      <div className="text-center w-full flex flex-col items-center md:flex-row xl:flex-col">
        <div className="w-full md:w-1/3 flex justify-center md:inline-block xl:flex xl:flex-col xl:flex-shrink-0 xl:w-1/3 xl:items-center xl:justify-center">
          <Passionate />
        </div>
        <div className="md:w-full md:text-left md:ml-12 xl:text-center xl:ml-0">
          <Heading
            text="Passionate"
            className="text-xl tracking-xl uppercase font-medium mt-10 text-shipGray-500"
          />
          <p className="text-shipGray-500 mt-10">
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
      </div>
      <div className="text-center w-full flex flex-col items-center justify-center md:flex-row mt-8 xl:flex-col xl:mt-0 xl:ml-8">
        <div className="w-full md:w-1/3 flex justify-center md:inline-block xl:flex xl:flex-col xl:flex-shrink-0 xl:w-1/3 xl:items-center xl:justify-center">
          <Resourceful />
        </div>
        <div className="md:w-full md:text-left md:ml-12 xl:text-center xl:ml-0">
          <Heading
            text="Resourceful"
            className="text-xl tracking-xl uppercase font-medium mt-10 text-shipGray-500"
          />
          <p className="text-shipGray-500 mt-10">
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our client’s needs.
          </p>
        </div>
      </div>
      <div className="text-center w-full flex flex-col items-center justify-center md:flex-row mt-8 xl:flex-col xl:mt-0 xl:ml-8">
        <div className="w-full md:w-1/3 flex justify-center md:inline-block xl:flex xl:flex-col xl:flex-shrink-0 xl:w-1/3 xl:items-center xl:justify-between">
          <Friendly />
        </div>
        <div className="md:w-full md:text-left md:ml-12 xl:text-center xl:ml-0">
          <Heading
            text="Friendly"
            className="text-xl tracking-xl uppercase font-medium mt-10 text-shipGray-500"
          />
          <p className="text-shipGray-500 mt-10">
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </div>
    </section>
  );
};
