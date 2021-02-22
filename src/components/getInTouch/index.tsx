import { Card } from '../Card';

export const GetInTouch = () => {
  return (
    <div className="relative md:max-w-5xl container md:mx-auto px-6 z-10 w-full mt-32 xl:px-0">
      <Card
        type="display"
        title="Let’s talk about your project"
        body="Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow."
        btnText="Get In Touch"
      />
    </div>
  );
};
