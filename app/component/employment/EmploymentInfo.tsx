import { ChangeEvent } from "react";

interface EmploymentInfoProps {
    index: number,
    title?:string,
    description?:string,
    updateData?: (index:number, value:string, section: "job" | "education") => void
  }

  const EmploymentInfo:React.FC<EmploymentInfoProps> = ({
    index,
    title,
    description,
    updateData
  }) => {
    // console.log("description:",description);
    return (
      <div className="flex flex-col gap-2">
        <div>
          <div>Job Title:</div>
          <input 
            type="text" 
            className="bg-gray-200 w-full"
          />
        </div>
        <div>
          <div>Description</div>
          <textarea 
            className="border-2 bg-gray-200 w-80 h-40" 
            onChange={updateData?e=>updateData(index, e.target.value, 'job'):undefined}
            defaultValue={description}
          />
        </div>
      </div>
    );
  }

  export default EmploymentInfo;