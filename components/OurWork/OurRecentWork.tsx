import { OurRecentWorkType } from "@/types/ourrecentworks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import * as brandIcons from '@fortawesome/free-brands-svg-icons';
import Image from "next/image";
import Link from "next/link";
import { decode } from 'he';
const OurRecentWork = ({ ourRecentWorksData }: { ourRecentWorksData: OurRecentWorkType }) => {
  const { title,excerpt,terms: {nodes},featuredImage: {node}} = ourRecentWorksData;
    const cleanExcerpt = decode(excerpt.replace(/<\/?[^>]+(>|$)/g, ''));
   return (
 <>
      <div
        className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark"
        data-wow-delay=".1s"
      >
        <Link
          href="/blog-details"
          className="relative block aspect-[37/22] w-full"
        >
            {nodes.map((term,index) => (
          <span key={index} className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {term.name}
          </span>
            ))}
          <Image src={node.mediaItemUrl} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8 bg-gray-light dark:bg-gray-dark">
          <h3>
            <Link
              href="/blog-details"
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          {/* <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {cleanExcerpt}
          </p> */}
          {/* <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={author.image} alt="author" fill />
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  By {author.name}
                </h4>
                <p className="text-xs text-body-color">{author.designation}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Date
              </h4>
              <p className="text-xs text-body-color">{publishDate}</p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default OurRecentWork;
