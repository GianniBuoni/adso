import { hubCard } from "@/styles/classNames";
import React from "react";

const TitlesPage = () => {
  const headingLabels = [
    "Title",
    "Current Stage",
    "Next Deadline",
    "With Whomst",
    "Notes",
  ];
  return (
    <div className="w-11/12">
      <h1>My Titles</h1>
      <table className={`${hubCard} w-full`}>
        <thead>
          <tr className="flex justify-around">
            {headingLabels.map((label) => (
              <th key={label}>{label}</th>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default TitlesPage;
