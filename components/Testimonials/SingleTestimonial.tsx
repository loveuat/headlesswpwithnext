import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import { decode } from 'he';
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  
  const { slug, title, status, id, name,excerpt,testimonialsWrapper: {testimonialData}} = testimonial;
  const cleanExcerpt = decode(excerpt.replace(/<\/?[^>]+(>|$)/g, ''));
  let ratingIcons = [];
  for (let index = 0; index < testimonialData.testimonialStarCount; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>,
    );
  }

  return (
    <div className="w-full">
      <div
        className="wow fadeInUp shadow-two dark:shadow-three dark:hover:shadow-gray-dark rounded-sm bg-white p-8 duration-300 hover:shadow-one dark:bg-dark lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
        <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
          “{cleanExcerpt}
        </p>
        <div className="flex items-center">
          
          <div className="w-full">
            <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
              {testimonialData.testimonialClientName}
            </h3>
            <p className="text-sm text-body-color">{testimonialData.testimonialClientCompany}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
