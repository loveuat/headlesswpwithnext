import { ServiceType } from "@/types/services";
import { decode } from 'he';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import * as brandIcons from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const ServiceCards = ({ dataOfService }: { dataOfService: ServiceType }) => {
  const { title,excerpt, databaseId, servicesFieldGorup:{sevicesField}} = dataOfService;
  const allIcons = {
  ...solidIcons,
  ...brandIcons,
};
  const ServiceIconComponent = allIcons[sevicesField.serviceIcon];
  const cleanExcerpt = decode(excerpt.replace(/<\/?[^>]+(>|$)/g, ''));
  return (
    <div className="w-full flex items-center md:items-center justify-center md:justify-start  text-center md:text-left mx-auto md:mx-0">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary mx-auto md:mx-0">
          <FontAwesomeIcon icon={ServiceIconComponent} className="w-10 h-10" />
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
         {title} 
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {cleanExcerpt}
        </p>
      </div>
    </div>
  );
};

export default ServiceCards;
