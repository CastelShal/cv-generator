import { useState } from "react";

function Project(name, desc) {
    this.id = Math.floor(Math.random() * 100)
    this.name = name || "";
    this.desc = desc || "";
}

function AddProjects() {
    const [projects, setProjects] = useState([new Project("Name", "Title")]);
    function addNew() {
        setProjects([...projects, new Project("Name", "Title")])
    }
    return (
        <>
            <button onClick={addNew}> Add New Project </button>
            <div className="inputs">
                {projects.map(proj => {
                    return <div key={proj.id}>
                        <input type="text" placeholder="Project Title" value={proj.name} /><br />
                        <textarea name="proj" cols="32" rows="3">{proj.desc}</textarea>
                    </div>
                })}
            </div>
        </>
    );
}

export default AddProjects;