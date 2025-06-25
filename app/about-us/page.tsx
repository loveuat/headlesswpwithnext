import AboutSectionOne from "@/components/AboutUs/AboutSectionOne";
import AboutSectionTwo from "@/components/AboutUs/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Hero from "@/components/Hero";
import client from "@/lib/apolloClient";
import { GET_PAGE_WITH_BANNER } from "@/lib/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = async () => {
  const { data } = await client.query({
    query: GET_PAGE_WITH_BANNER,
    variables: { slug: "about-us" },
  });
  const aboutBannerData = data?.page?.banners?.banner
  console.log(data?.page);
    return (
    <>
      <Hero bannerData={aboutBannerData}/>
    </>
  );
};

export default AboutPage;
