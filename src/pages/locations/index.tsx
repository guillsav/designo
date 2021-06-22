import { GetInTouch, SharedHeader } from '../../components';

export const Locations = () => (
  <>
    <div className="container mx-auto md:max-w-5xl md:px-6 xl:px-0">
      <SharedHeader
        type="mosaic"
        title="Canada"
        addressHeader="Designo Central Office"
        address="3886 Wellington StreetToronto, Ontario M9C 3J5"
        phone="253-863-8967"
        email="contact@designo.co"
      />
    </div>
    <GetInTouch />
  </>
);
