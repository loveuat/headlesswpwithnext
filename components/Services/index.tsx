'use client';
import SectionTitleWithBorder from "../Common/SectionTitleWithBorder";
import ServiceCards from  "./ServiceCards"
import { usePathname } from 'next/navigation';
const Services = ({dataOfServices}) => {
   const servicePathName = usePathname();
   const isServices = servicePathName === '/services';
  return (
        <>
      <section id="services" className={`py-16 md:py-20 lg:py-28 dark:bg-bg-color-dark  relative ${servicePathName === '/services' ? 'bg-white' : 'bg-gray-light' }`}>
        <div className="container">
          <SectionTitleWithBorder
            title="What We Offer"
            paragraph="Our best services are designed to deliver exceptional quality, reliability, and innovation tailored to your needs. From start to finish, we ensure outstanding support and results that exceed expectations."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {dataOfServices.map((dataOfService,index) => (
              <ServiceCards key={index} dataOfService={dataOfService}  />
            ))}
          </div>
        </div>
      </section>
    </>
  );
  };

export default Services;