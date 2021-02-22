import { Card, FlexCard, SharedHeader, GetInTouch } from '../../components';
import { features, projects } from '../../lib';

export const WebDesign = () => {
  const projectsElement = projects
    ? projects.map((project, index) => (
        <div className="lg:flex-shrink-0 w-full h-full" key={index}>
          <FlexCard
            title={project.title}
            text={project.text}
            thumbnail={project.thumbnail}
            alt={project.alt}
          />
        </div>
      ))
    : null;

  const featuresList = features.filter(feature => feature.id !== 1);

  const featuresElement = featuresList
    ? featuresList.map((feature, index) => (
        <div className="lg:w-48/2" key={index}>
          <Card type="feature" feature={feature} />
        </div>
      ))
    : null;

  return (
    <>
      <div className="md:max-w-5xl container mx-auto md:px-6 xl:px-0">
        <SharedHeader
          type="thin"
          title="Web Design"
          description="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
        />
        <div className="px-6 mt-14 md:px-0 md:mt-23 lg:grid lg:grid-cols-3 gap-8">
          {projectsElement}
        </div>
        <div className="px-6 md:px-0 mt-24 md:mt-23 lg:flex lg:items-center lg:justify-between">
          {featuresElement}
        </div>
      </div>
      <GetInTouch />
    </>
  );
};
