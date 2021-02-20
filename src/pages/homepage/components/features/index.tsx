import { Card } from '../../../../components';
import { features } from '../../../../lib';

export const Features = () => {
  const firstFeature = features[0];

  const restFeatures = features.filter(feature => feature.id !== 1);
  const restFeaturesElement = restFeatures
    ? restFeatures.map(feature => (
        <Card key={feature.id} feature={feature} type="feature" />
      ))
    : null;

  return (
    <section
      id="feature"
      className="w-full px-6 mt-24 lg:grid grid-rows-3 grid-flow-col gap-6 lg:px-0">
      <div className="lg:col-span-3 lg:row-span-3 lg:h-lg">
        {firstFeature ? <Card feature={firstFeature} type="feature" /> : null}
      </div>
      <div className="lg:col-span-2 lg:row-span-2 lg:h-md">
        {restFeaturesElement}
      </div>
    </section>
  );
};
