
import client from "@/lib/apolloClient";
import Testimonials from "@/components/Testimonials";
import { GET_ALL_TESTIMONIALS } from "@/lib/queries";
const TestimonialPage = async () => {
  const { data } = await client.query({
    query: GET_ALL_TESTIMONIALS,
    fetchPolicy: "no-cache",
  });
  const testimonialData = data?.allTestimonials?.nodes || [];
  return (
      <Testimonials testimonialData={testimonialData} />
  );
};
export default TestimonialPage;
