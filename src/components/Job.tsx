import React from "react";
import { useNavigate } from "react-router-dom";

interface propsType {
  photo: string;
  Title: string;
  subtitle: string;
  description: string;
  fields: string[];
  ind:number
}

const Job = ({ photo, Title, subtitle, description, fields ,ind}: propsType) => {
  const colorMap = [
  ' border border-blue-200 text-blue-400 bg-blue-200',
  'border border-red-200 text-red-400 bg-red-200',
  'border border-green-200 text-green-400 bg-green-200',
];
 const Navigate = useNavigate();
const handlenewp = () =>{
  
  Navigate("/Descrpition/" + ind)
}
  return (
    <div className=" hover:bg-blue-200 border-[0.3px] rounded-3xl m-2 flex  flex-row   p-5 pl-7 gap-2 mb-5" onClick={handlenewp}>
      <div className="grid h-full basis-1/8  justify-center">
        <div>
          <img src={photo} alt="job1" className=" h-10 object-contain" />
        </div>
      </div>

      <div className="basis-7/8">
        <div className="font-semibold text-2xl">{Title}</div>
        <div className="font-[300]">{subtitle}</div>
        <div>{description}</div>
        <div className="flex gap-2 mt-4">{fields.map((c,ind)=><p key={ind} className= { colorMap[(ind+1)%3] + " rounded-xl p-2"}>{c}</p>)}</div>
      </div>
    </div>
  );
};

export default Job;
