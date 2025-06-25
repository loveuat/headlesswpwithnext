import AboutSectionOne from "@/components/AboutUs/AboutSectionOne";
import AboutSectionTwo from "@/components/AboutUs/AboutSectionTwo";
import Blog from "@/components/Blog";
//import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
//import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import TestimonialPage from "@/app/testimonials/page";
import TechStacksPage from "@/app/techstacks/page";
import OurRecentWorkPage from "./our-recent-work/page";
import Services from "@/components/Services";
//import Video from "@/components/Video";
import { Metadata } from "next";
import { fetchGraphQL } from "@/lib/api";
import client from "@/lib/apolloClient";
import { GET_PAGE_WITH_BANNER } from "@/lib/queries";
import { GET_ALL_TESTIMONIALS } from "@/lib/queries";
import { GET_ALL_SERVICES } from "@/lib/queries";
export const metadata: Metadata = {
  title: "Modern Web Development Agency",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default async function Home() {
  const { data:homeresponse} = await client.query({
    query: GET_PAGE_WITH_BANNER,
    variables: { slug: "home" },
    fetchPolicy: "no-cache",
  });
  const { data:servicesresponse} = await client.query({
    query: GET_ALL_SERVICES,
    variables: { first: 6, offset: 0 },
    fetchPolicy: "no-cache",
  });

  const dataServices = servicesresponse?.ourServices?.nodes
  const homeBannerData = homeresponse?.page?.banners?.banner
  console.log(homeBannerData);
  //const homeServicesData =  homeresponse?.page?.iconBoxes?.icoxBox
  const homeChooseData =  homeresponse?.page?.contentWithImageRight?.contentBoxWithImageRight
  return (
    <>
      <ScrollUp />
      <Hero bannerData={homeBannerData}/>
      {/* <Features servicesData={homeServicesData}/> */}
      <Services dataOfServices={dataServices} />
      <TechStacksPage />
      {/* <Video /> */}
      {/* <Brands /> */}
      <AboutSectionOne contentWithImage={homeChooseData}/>
      <OurRecentWorkPage />
      {/* <AboutSectionTwo /> */}
      <TestimonialPage />
      {/* <Pricing />
      <Blog /> */}
      <Contact />
    </>
  );
}
