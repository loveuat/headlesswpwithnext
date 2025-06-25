import Breadcrumb from "@/components/Common/Breadcrumb";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import { fetchGraphQL } from "@/lib/api";
import client from "@/lib/apolloClient";
import { GET_PAGE_WITH_BANNER } from "@/lib/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = async () => {
    const { data } = await client.query({
    query: GET_PAGE_WITH_BANNER,
    variables: { slug: "contact" },
  });
  const contactBannerData = data?.page?.banners?.banner
  return (
    <>
      <Hero bannerData={contactBannerData}/>
      <Contact />
    </>
  );
};

export default ContactPage;
