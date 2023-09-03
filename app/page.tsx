'use client'

import React from "react";
import SectionBox from "./component/SectionBox";
import { useSection } from "./hooks/useSection";
import Resume from './component/section/resume/Resume';
import Applications from './component/section/applications/Applications';
import Settings from './component/section/settings/Settings';
import Help from './component/section/help/Help';

export default function Home() {
  const { currentSection, setCurrentSection } = useSection();

  let body = (
    <SectionBox title="Resume" subTitle="x copies" bodyContent = {Resume}/> 
  )

  if(currentSection === "APPLICATIONS"){
    body = (
      <SectionBox title="APPLICATIONS" bodyContent = {Applications}/> 
    )
  }

  if(currentSection === "SETTINGS"){
    body = (
      <SectionBox title="SETTINGS" bodyContent = {Settings}/> 
    )
  }

  if(currentSection === "HELP"){
    body = (
      <SectionBox title="HELP"  bodyContent = {Help}/> 
    )
  }

  return (
    <div className="h-full w-11/12">
      {body}
    </div>
  );
}
