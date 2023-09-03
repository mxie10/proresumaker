import { ChangeEvent } from "react";

interface EducationInfoProps {
    index: number,
    updateData?: (index:number, value:string, section:string) => void
  }

  const EducationInfo:React.FC<EducationInfoProps> = ({
    index,
    updateData
  }) => {
    return (
      <div>
        <textarea className="border-2 bg-gray-200 w-80 h-40" onChange={updateData?e=>updateData(index, e.target.value, 'education'):undefined}/>
      </div>
    );
  }

  export default EducationInfo;