import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import { fetchGraphQL } from "@/lib/api";
import { GET_HOME_BANNER } from "@/lib/queries";
export const metadata: Metadata = {
  title: "Modern Web Development Agency",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};
export default async function Home() {
  const bannerresponse = await fetchGraphQL(GET_HOME_BANNER);
  const bannerData = bannerresponse?.data?.page?.homePage?.homeBanner;
  const servicesData = bannerresponse?.data?.page?.homePage?.services?.ourServices;
  return (
    <>
      <ScrollUp />
      <Hero bannerData={bannerData}/>
      <Features servicesData={servicesData}/>
      {/* <Video /> */}
      {/* <Brands /> */}
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      <Testimonials />
      {/* <Pricing />
      <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
