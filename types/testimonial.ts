type TestimonialData ={
  testimonialClientCompany: string;
  testimonialClientName:string;
  testimonialStarCount:number;
}
type TestimonialWrapper ={
  testimonialData: TestimonialData;
}
export type Testimonial = {
  slug: string;
  title: string;
  status:string;
  id: string;
  name: string;
  excerpt: string;
  testimonialsWrapper:TestimonialWrapper;
};
