import { useState } from "react";

function Project(name, desc) {
    this.id = Math.floor(Math.random() * 100)
    this.name = name || "";
    this.desc = desc || "";
}


function AddProjects({callback}) {
    const [no, setNo] = useState(0);
    const jsx = [];
    function getAllProjects(){
        const targets = document.querySelectorAll('.proj-target');
    
        const data = [...targets].map(elem => {
            const title = elem.querySelector('.title').value;
            const desc = elem.querySelector('.desc').value;
            return new Project(title, desc);
        })
        callback(data);
    }

    for (let i = 0; i < no; i++) {
        jsx.push(
            <div className="proj-target">
                <input type="text" placeholder="Project Title" className="title" onChange={getAllProjects}/><br />
                <textarea name="proj" cols="32" rows="3" placeholder="Project Description" className="desc" onChange={getAllProjects}></textarea>
                <hr style={{width:"70%", color:"rgba(0,0,0,0.4)"}}/>
            </div>
        )
    }

    return (
        <>
            <button onClick={()=> setNo(no + 1)}> Add New Project </button>
            <div className="inputs">
                {jsx}
                {/* <button type="submit" className="submit" onClick={getAllProjects}>Submit</button> */}
            </div>
        </>
    );
}

export default AddProjects;