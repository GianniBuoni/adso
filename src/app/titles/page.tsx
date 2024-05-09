import { getTitleOverviewData } from "@/server/db/titles/titleActions";
import { hubCard } from "@/styles/classNames";
import Link from "next/link";

const TitlesPage = async () => {
  const data = await getTitleOverviewData();

  const headingLabels: { label: string; visible?: "hidden md:table-cell" }[] = [
    { label: "Title" },
    { label: "Current Stage", visible: "hidden md:table-cell" },
    { label: "Next Deadline", visible: "hidden md:table-cell" },
    { label: "Logged In Biblio?", visible: "hidden md:table-cell" },
  ];
  return (
    <div className="w-11/12">
      <h1>My Titles</h1>
      <div className={hubCard}>
        <table className={`table`}>
          <thead>
            <tr>
              {headingLabels.map((heading) => (
                <th key={heading.label} className={heading.visible}>
                  {heading.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((title) => (
              <tr key={title.workRef}>
                <td>
                  <Link
                    href={`/titles/${title.workRef}`}
                    className="link link-neutral font-semibold"
                  >
                    {title.title}
                  </Link>
                </td>
                {title.skeds.map((sked) =>
                  sked.stages.map((stage) => (
                    <>
                      <td className="hidden md:table-cell">{stage.name}</td>
                      <td className="hidden md:table-cell">{stage.date}</td>
                      <td className="hidden md:table-cell">
                        {stage.loggedInBiblio.toString()}
                      </td>
                    </>
                  )),
                )}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="p-5">Total titles: {data.length.toString()}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default TitlesPage;
export const revalidate = 0;
