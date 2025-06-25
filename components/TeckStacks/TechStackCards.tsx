import { TechStackType } from "@/types/techstacks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import * as brandIcons from '@fortawesome/free-brands-svg-icons';
const TechStackCard = ({ techStackData }: { techStackData: TechStackType }) => {
  const { title,id,techStacksFields: {techStacksGroup}} = techStackData;
  const allIcons = {
    ...solidIcons,
    ...brandIcons,
  };
  const techIcon = allIcons[techStacksGroup.teckStackIcon];
   return (
    <div className="w-auto">
      <div
        className="wow fadeInUp shadow-two dark:shadow-three dark:hover:shadow-gray-dark rounded-sm p-3 duration-300 hover:shadow-one bg-gray-light dark:bg-dark lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <div className="">
          <div className=" flex items-center justify-center gap-2">
            <div className=""><FontAwesomeIcon icon={techIcon} className="w-6 h-6" /></div>
            <h3 className="mb-1 text-base font-semibold text-dark dark:text-white md:text-base">
              {title}
            </h3>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackCard;
