import { getOneTitle } from "@/server/db/titles/titleActions";

const TitlePage = async ({ params }: { params: { id: string } }) => {
  const thisTitle = await getOneTitle(params.id);
  return <h1>{thisTitle?.title}</h1>;
};

export default TitlePage;
