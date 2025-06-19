import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
const Features = ({servicesData}) => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28 dark:bg-bg-color-dark bg-gray-light relative">
        <div className="container">
          <SectionTitle
            title="Our Services"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((ourServices,index) => (
              <SingleFeature key={index} ourServices={ourServices}  />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
