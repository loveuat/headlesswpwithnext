//import Breadcrumb from "@/components/Common/Breadcrumb";
import Hero from "@/components/Hero";
import client from "@/lib/apolloClient";
import { GET_PAGE_WITH_BANNER } from "@/lib/queries";
import { GET_ALL_SERVICES } from "@/lib/queries";
import { Metadata } from "next";

import Services from  "@/components/Services"
export const metadata: Metadata = {
  title: "Our Work | Modern Web Development Agency",
  description: "this page showcase our latest work",
  // other metadata
};

const ServicesPage = async () => {
  const { data : servicebannerdata } = await client.query({
    query: GET_PAGE_WITH_BANNER,
    variables: { slug: "services" },
    fetchPolicy: "no-cache",
  });
  const { data:serviceslistresponse} = await client.query({
    query: GET_ALL_SERVICES,
    variables: { first: 100, offset: 0 },
    fetchPolicy: "no-cache",
  });
  const serviceskBannerData = servicebannerdata?.page?.banners?.banner
  const servicesListsData = serviceslistresponse?.ourServices?.nodes
    return (
    <>
      <Hero bannerData={serviceskBannerData}/>
      <Services dataOfServices={servicesListsData} />
    </>
  );
};

export default ServicesPage;
