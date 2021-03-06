import { Card } from '../card';

export const GetInTouch = () => {
  return (
    <div className="container relative z-10 w-full px-6 mt-32 md:max-w-5xl md:mx-auto xl:px-0">
      <Card
        type="display"
        title="Let’s talk about your project"
        body="Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow."
        btnText="Get In Touch"
      />
    </div>
  );
};
