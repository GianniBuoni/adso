import { getTitleOverviewData } from "@/server/db/titles/titleActions";
import { hubCard } from "@/styles/classNames";
import Link from "next/link";

const TitlesPage = async () => {
  const titleData = await getTitleOverviewData();

  const headingLabels: { label: string; visible?: "hidden md:table-cell" }[] = [
    { label: "Title" },
    { label: "Current Stage", visible: "hidden md:table-cell" },
    { label: "Next Deadline", visible: "hidden md:table-cell" },
    { label: "With Whomst", visible: "hidden md:table-cell" },
    { label: "Notes", visible: "hidden md:table-cell" },
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
            {titleData.map((title) => (
              <tr key={title.id}>
                <td>
                  <Link
                    href={`/titles/${title.id}`}
                    className="link link-neutral font-semibold"
                  >
                    {title.title}
                  </Link>
                </td>
                <td>{title.sked?.stages[0]?.name}</td>
                <td>{title.sked?.stages[0]?.due}</td>
                <td></td>
                <td>{title.note}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="p-5">
                Total titles: {titleData.length.toString()}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default TitlesPage;
export const revalidate = 0;
