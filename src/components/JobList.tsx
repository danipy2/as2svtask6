import React from "react";
import Job from "./Job";
import SortSelect from "./search";
import { useState } from "react";
type SortOption = "relevance" | "name" | "date" | "popularity";

import jobs from "../jobs.json";

const JobList = () => {
  const job = jobs["job_postings"];
  
  const [sortBy, setSortBy] = useState<SortOption>("relevance");
  return (
    <div className="grid grid-cols-12 pt-10">
      <div className=" col-span-10 md:col-span-10 pl-5 md:pl-20 lg:pl-35">
        <div className="pl-2 mb-10 flex justify-between grid-col-4">
          <div>
            <h1 className="font-[1000]   text-3xl non-italic ">
              Opportunities
            </h1>
            <p className="font-[200]"> Showing {job.length} results </p>
          </div>
          <div className="flex">
            <p className="pr-2 font-[200]">Sorted by: </p>
            <SortSelect value={sortBy} onChange={setSortBy} />
          </div>
        </div>

        {job.map((j,ind) => (
          <Job
            key={ind}
            Title={j["title"]}
            description={j["description"]}
            subtitle={j["about"]["location"]}
            photo={j.image}
            fields={j["about"]["categories"]}
            ind={ind}
          />
        ))}
      </div>
    </div>
  );
};

export default JobList;
