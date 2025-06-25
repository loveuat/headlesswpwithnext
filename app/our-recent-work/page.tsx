import client from "@/lib/apolloClient";
import OurRecentWorks from "@/components/OurWork";
import { GET_ALL_PORTFOLIOS } from "@/lib/queries";
const OurRecentWorkPage = async () => {
  const { data } = await client.query({
    query: GET_ALL_PORTFOLIOS,
    fetchPolicy: "no-cache",
  });
  const ourRecentWorks = data?.allOurWorks?.nodes || [];
  return (
      <OurRecentWorks ourRecentWorksDatas={ourRecentWorks} />
  );
};
export default OurRecentWorkPage;