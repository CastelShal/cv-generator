import { useState } from "react";
import ContentSection from "./contentSection.jsx";
import AddProjects from "./addProjects.jsx";
import AddEducation from "./addEducation.jsx";
import Summary from "./summary.jsx";
function SidePanel({ summaryCallback, skillCallback, projCallback, eduCallback }) {
    const [width, setWidth] = useState("500px");
    const [noSk, setNoSk] = useState(0);

    const skills = []
    for (let i = 0; i < noSk; i++) {
        skills.push(<div>
            <input type="text" className="skill" onChange={sendSkills}/>
        </div>)
    }

    function handleDrawer() {
        setWidth(width == "0px" ? "500px" : "0px");
    }

    function sendSkills() {
        const skillRay = [...document.querySelectorAll('.skill')].map(tag => tag.value);
        skillCallback(skillRay);
    }

    return (
        <div className="sp-wrapper">
            <div id='sidepanel' style={{ width: width }}>
                <div className="data-collector">
                    <ContentSection title="Personal Details">
                        <Summary sumCallback={summaryCallback}/>
                    </ContentSection>
                    <ContentSection title="Projects">
                        <AddProjects callback={projCallback} />
                    </ContentSection>
                    <ContentSection title="Education">
                        <AddEducation callback={eduCallback} />
                    </ContentSection>
                    <ContentSection title="Skills">
                        <button onClick={() => { setNoSk(noSk + 1) }}>Add New Skill</button>
                        <div className="inputs spaced">{skills}</div>
                        <button type="submit" className="submit" onClick={sendSkills}>Submit</button>
                    </ContentSection>
                </div>
            </div>
            <div id="button">
                <button id="drawer" onClick={handleDrawer}> {width == "500px" ? "<" : ">"} </button>
            </div>
        </div>
    )
}

export default SidePanel;