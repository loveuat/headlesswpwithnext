
import client from "@/lib/apolloClient";
import TeckStacks from "@/components/TeckStacks";
import { GET_ALL_TECHSTACKS } from "@/lib/queries";
const TechStacksPage = async () => {
  const { data } = await client.query({
    query: GET_ALL_TECHSTACKS,
    fetchPolicy: "no-cache",
  });
  const techStacksData = data?.allTechStacks?.nodes || [];
  return (
      <TeckStacks techStacksData={techStacksData} />
  );
};
export default TechStacksPage;