import Header from './components/header.jsx';
import Content from './components/content.jsx';
import SidePanel from './components/sidepanel.jsx';
import { useState } from 'react';

function App() {
  const [summary, setSummary] = useState({});
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [education, setEducation] = useState([]);

  return (
      <>
    <div className="top-level">
      <SidePanel summaryCallback={setSummary} skillCallback={setSkills} projCallback={setProjects} eduCallback={setEducation}/>
      <div style={{flex:"1"}}>
        <Header {...summary}/>
        <Content summary={summary.summary} skills={skills} projects={projects} education={education}/>
      </div> 
    </div>
    </>
  )
}

export default App
