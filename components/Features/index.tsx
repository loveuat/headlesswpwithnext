import { Feature } from "@/types/feature";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";

const Features = ({servicesData}) => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28 bg-gray-light relative">
        <div className="container">
          <SectionTitle
            title={servicesData.iconWrapperHeading}
            paragraph={servicesData.iconWrapperDescription}
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.iconBoxDetails.map((ourServices,index) => (
              <SingleFeature key={index} ourServices={ourServices}  />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
