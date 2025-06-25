import Breadcrumb from "@/components/Common/Breadcrumb";
import { fetchGraphQL } from "@/lib/api";
import { GET_ABOUT_US_CONTENT } from "@/lib/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const OurWorkDetail = async () => {
  const aboutresponse = await fetchGraphQL(GET_ABOUT_US_CONTENT);
   const aboutUsBanner = aboutresponse?.data?.page?.homePage?.whyChooseUs;
   console.log(aboutUsBanner);
    return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="We are a results-driven web development agency crafting custom digital solutions to help your business grow online."
      />
      
    </>
  );
};

export default OurWorkDetail;
