import { useState } from "react";
import ContentSection from "./contentSection.jsx";
import AddProjects from "./addProjects.jsx";
import AddEducation from "./addEducation.jsx";
function SidePanel() {
    const [width, setWidth] = useState("500px");
    const [skills, setSkills] = useState([]);
    function handleDrawer() {
        setWidth(width == "0px" ? "500px" : "0px");
    }

    return <div id='sidepanel' style={{ width: width }}>
        <button id="drawer" onClick={handleDrawer}> {width == "500px" ? ">" : "<"} </button>
        <div className="data-collector">
            <ContentSection title="Summary">
                This can be a short description of yourself
                <textarea name="summary" id="summ" cols="35" rows="3"></textarea>
                <button type="submit" className="submit">Submit</button>
            </ContentSection>
            <ContentSection title="Projects">
                <AddProjects />
            </ContentSection>
            <ContentSection title="Education">
                <AddEducation/>
            </ContentSection>
            <ContentSection title="Skills">
                <button onClick={()=>{setSkills([...skills,""])}}>Add New Skill</button>
                {skills.map(skill => <div>
                    <input type="text" value={skill} onChange={(val) => {
                        const copy = skills.slice();
                        const index = copy.findIndex((e) => skill == e);
                        copy[index] = val.target.value;
                        setSkills(copy);
                    }}/>
                </div> )}
            </ContentSection>
        </div>
    </div>
}

export default SidePanel;