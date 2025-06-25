import SectionTitleWithBorder from "../Common/SectionTitleWithBorder";
import OurRecentWork from "./OurRecentWork";
const OurWorks = ({ourRecentWorksDatas}) => {
  return (
    <section
      id="portfolios"
      className="dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitleWithBorder
          title="Our Recent Works"
          paragraph="Explore our recent works that showcase creativity, performance, and results. From dynamic websites to custom web applications and eCommerce platforms."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-2">
          {ourRecentWorksDatas.map((ourRecentWorksData) => (
            <div key={ourRecentWorksData.id} className="w-full">
              <OurRecentWork ourRecentWorksData={ourRecentWorksData} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
