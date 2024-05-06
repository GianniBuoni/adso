import { getAllTitles } from "@/server/db/titles/titleActions";
import { hubCard } from "@/styles/classNames";
import Link from "next/link";

const TitlesPage = async () => {
  const titleData = await getAllTitles();

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
            <tr className="flex justify-around">
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
                  <Link href={`/titles/${title.id}`} className="link-primary">
                    {title.title}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TitlesPage;
