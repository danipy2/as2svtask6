import { useParams } from "react-router-dom";
import jobs from "../jobs.json"; // assuming it's an array or object

export const Description = () => {
  const { id } = useParams(); // id is string | undefined

  const jobId = id ? parseInt(id) : null; // safely convert

  if (jobId === null || isNaN(jobId)) {
    return <div>Invalid job ID</div>;
  }
  const colorMap = ["  text-[ #FFB836]", " text-red-200", " text-green-200"];
  const borderMap = [
    " border border-blue-200 ",
    " border border-red-200 ",
    " border border-green-200",
  ];
  const bgMap = [" bg-blue-200 ", " bg-red-100 ", " bg-green-100"];

  const job = jobs["job_postings"][jobId];

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="flex p-3 gap-4 flex-row">
      <div className="p-1  basis-5/7">
        <div className="mb-5">
          <div className="font-extrabold mt-3 mb-2">Description</div>
          <div>{job.description}</div>
        </div>
        <div className="mb-5">
          <div className="font-extrabold mt-3 mb-2"> Responsibility </div>
          <div>
            {job.responsibilities.map((c, ind) => (
              <div className="flex">
                <img src="/check.png" className="h-4 mt-1 mr-1" alt="" />
                <p key={ind}>{c}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-5">
          <div>
            <p className="font-extrabold mt-3 mb-2">Ideal Candidate We Want</p>
          </div>
          <div>
            <div className="flex">
                <span className="font-bold mr-2">.</span>
                <div className="flex pt-1"> {job.ideal_candidate.age}{" "}
              {job.ideal_candidate.gender}</div>
             
            </div>{" "}
            {job.ideal_candidate.traits.map((c, ind) => (
             <div className="flex"> <span className="font-bold mr-2 ">.</span><p key={ind} className="pt-1">{c}</p></div>
            ))}
          </div>
        </div>
        <div>
          <div>
            <p className="font-extrabold ">When and Where</p>
          </div>
          <div className="flex">
            <img src="/location.png" className="h-9 pb-2 mr-1" alt="" />
            {job.when_where}
          </div>
        </div>
      </div>
      <div className=" basis-2/7">
        <div className="mb-4">
          <div className="mb-1 font-bold ">About</div>
          <div>
            <div className="flex gap-2 mb-2">
              <div className="flex align-items-end pt-4">
                <img className="h-7  " src="/postedon.png" alt="" />
              </div>
              <div>
                <p>Posted On</p>
                <p className="font-bold">{job.about.posted_on}</p>
              </div>
            </div>
            <div className="flex gap-2 mb-2">
              <div className="flex align-items-end pt-4">
                <img className="h-7  " src="/deadline.png" alt="" />
              </div>
              <div>
                <p>Dead line</p>
                <p className="font-bold">{job.about.deadline}</p>
              </div>
            </div>
            <div className="flex gap-2 mb-2">
              <div className="flex align-items-end pt-4">
                <img className="h-7  " src="/location.png" alt="" />
              </div>
              <div>
                <p>Locaton </p>
                <p className="font-bold">{job.about.location}</p>
              </div>
            </div>
            <div className="flex gap-2 mb-2 ">
              <div className="flex align-items-end pt-4">
                <img className="h-7  " src="/starteddate.png" alt="" />
              </div>
              <div>
                <p>Start Date</p>
                <p className="font-bold">{job.about.start_date}</p>
              </div>
            </div>
            <div className="flex gap-2 mb-2 ">
              <div className="flex align-items-end pt-4">
                <img className="h-7  " src="/end.png" alt="" />
              </div>
              <div>
                <p>End Date</p>
                <p className="font-bold">{job.about.end_date}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <div className="font-extrabold">catagory</div>
          <div className="gap-2">
            {job.about.categories.map((c, ind) => (
              <button
                key={ind}
                className={
                  "mr-2 rounded-xl p-1 " +
                  colorMap[ind % 3] +
                  borderMap[(ind + 1) % 3] +
                  bgMap[(ind + 1) % 3]
                }
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-3">
          <div className="font-extrabold">Requirement</div>
          <div>
            {job.about.required_skills.map((c, ind) => (
              <button
                key={ind}
                className={
                  "  p-1 mr-1 mb-1 text-[#4640DE] bg-blue-200  border border-blue-200"
                }
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
