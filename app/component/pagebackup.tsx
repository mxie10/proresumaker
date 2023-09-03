// 'use client'

// import { useEffect, useRef, useState } from "react";
// import EmploymentInfo from "./component/employment/EmploymentInfo";
// import EducationInfo from "./component/edcation/EducationInfo";
// import ResumeForm from "./component/PagingTest";
// import React from "react";
// import Template2 from "./component/templates/template2";
// import PagingTest2 from "./component/PagingTest2";
// import Sidebar from "./component/sidebar/Sidebar";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'

// const userData = {
//   job: [
//     {
//       index:0,
//       title:"Software Developer",
//       company:"company1",
//       time:"2023/8/13",
//       description: "Steam versions are being updated (for free) to include the new features,Raytracing support, 4K support (presumably not for Series S), high framerate support, and 3D audio support,Xbox One owners get access"
//     },
//   ],
//   education: [
//     {
//       school: "Syracuse University",
//       degree: "Master",
//       time:"May 7th 2019",
//       city:"Syracuse"
//     }
//   ]
// }

// export default function Home() {

//   const workExRef = useRef<HTMLDivElement | null>(null);
//   const [experience, setExperience] = useState([]);
//   const [education, setEducation] = useState([]);
//   const [data, setData] = useState(userData);
//   const [workExperienceSection, setWorkExperienceSection] = useState<JSX.Element[]>([<EmploymentInfo index={0} />]);
//   const [edcationSection, setEducationSection] = useState<JSX.Element[]>([<EducationInfo index={0}/>]);
  
//   const updateData = (index: number, newValue: string, section: keyof typeof userData) => {
//     setData((prevData) => {
//       const newData = { ...prevData };
//       newData[section][index] = {
//         ...newData[section][index],
//         description: newValue,
//       };
//       return newData;
//     });
//   };

//   const updateData = (index: number, updateObject: { [key: string]: any }, section: keyof typeof userData) => {
//     setData((prevData) => {
//       const newData = { ...prevData };
//       const targetItem = { ...newData[section][index], ...updateObject };
//       newData[section][index] = targetItem;
//       return newData;
//     });
//   };

//   updateData(0, { title: "New Title", company: "New Company" }, "job");

//   const addNewWorkExperience = () => {
//     const newWorkExperience = <EmploymentInfo index={3}/>;
//     setWorkExperienceSection(prevItems => [...prevItems, newWorkExperience]);
//   }

//   const addNewEducation = () => {
//     const newEducation= <EducationInfo index={2} />;
//     setEducationSection(prevItems => [...prevItems, newEducation]);
//   }
 
//   return (
//     <div className="h-full">
//       <div 
//         className="
//           absolute 
//           left-3 
//           top-3 
//           cursor-pointer 
//           md:hidden
//         "
//       >
//         <FontAwesomeIcon icon={faBars} size="xl"/>
//       </div>
//       <Sidebar/>

//       <PagingTest2/>
//       <ResumeForm/>
//       <Template2 description={data.job[0].description} data={userData}/>

//       <div className="flex flex-col">
//         <div ref={workExRef}>
//           {data.job.map((item,index)=>{
//             return <EmploymentInfo 
//                 key={index} 
//                 index={index} 
//                 title={item.title} 
//                 description={item.description}
//                 updateData={updateData} 
//               />
//           })}
//         </div>
//         <div className="bg-blue-400 h-10 text-white cursor-pointer text-center" onClick={addNewWorkExperience}>
//           Add new work section
//         </div>
//       </div>

//       <div className="flex flex-col">
//         <div ref={workExRef}>
//         </div>
//         <div className="bg-blue-400 h-10 text-white cursor-pointer text-center" onClick={addNewEducation}>
//           Add new education section
//         </div>
//       </div>

//     </div>
//   );
// }
