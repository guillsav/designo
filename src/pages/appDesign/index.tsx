import { Card, FlexCard, SharedHeader } from '../../components';
import { appProjects as projects, features } from '../../lib';

export const AppDesign = () => {
  const projectsElement = projects
    ? projects.map((project, index) => (
        <div className="lg:flex-shrink-0 w-full h-full" key={index}>
          <FlexCard
            title={project.title}
            text={project.description}
            thumbnail={project.thumbnail}
            alt={project.alt}
            bg={project.bg}
          />
        </div>
      ))
    : null;

  const featuresList = features.filter(feature => feature.id !== 2);

  const featuresElement = featuresList
    ? featuresList.map((feature, index) => (
        <div className="lg:w-48/2" key={index}>
          <Card type="feature" feature={feature} />
        </div>
      ))
    : null;

  return (
    <div className="md:max-w-5xl container mx-auto md:px-6 xl:px-0">
      <SharedHeader
        type="thin"
        title="App Design"
        description="Our mobile designs bring intuitive digital solutions
 to your customers right at their fingertips."
      />
      <div className="px-6 mt-14 md:px-0 md:mt-23 lg:grid lg:grid-cols-3 gap-8">
        {projectsElement}
      </div>
      <div className="px-6 md:px-0 mt-24 md:mt-23 lg:flex lg:items-center lg:justify-between">
        {featuresElement}
      </div>
    </div>
  );
};
