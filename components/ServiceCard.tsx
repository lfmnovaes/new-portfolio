import { FunctionComponent } from 'react';
import { Service } from '../types';

const ServiceCard: FunctionComponent<{ service: Service }> = ({
  service: { Icon, about, title },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };

  return (
    <div className="flex items-center p-2 space-x-4">
      <Icon className="w-12 h-12 text-green" />
      <div>
        <h4 className="font-bold">
          {title}
          <p dangerouslySetInnerHTML={createMarkup()} />
        </h4>
      </div>
    </div>
  );
};

export default ServiceCard;
