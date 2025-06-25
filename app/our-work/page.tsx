import Breadcrumb from "@/components/Common/Breadcrumb";
import Hero from "@/components/Hero";
import { fetchGraphQL } from "@/lib/api";
import client from "@/lib/apolloClient";
import { GET_PAGE_WITH_BANNER } from "@/lib/queries";
import { Metadata } from "next";
import OurRecentWorkPage from "@/app/our-recent-work/page";

export const metadata: Metadata = {
  title: "Our Work | Modern Web Development Agency",
  description: "this page showcase our latest work",
  // other metadata
};

const OurWorkPage = async () => {
  const { data } = await client.query({
    query: GET_PAGE_WITH_BANNER,
    variables: { slug: "our-work" },
    fetchPolicy: "no-cache",
  });
  const ourWorkBannerData = data?.page?.banners?.banner
    return (
    <>
      <Hero bannerData={ourWorkBannerData}/>
      <OurRecentWorkPage />
    </>
  );
};

export default OurWorkPage;
