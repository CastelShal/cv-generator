import { useState } from "react";

function Education(institute, course, gpa, dates){
    this.institute = institute;
    this.course = course;
    this.gpa = gpa;
    this.dates = dates;
}

function AddEducation() {
    const [education, setProjects] = useState([new Education("Xavier's", "Biscuit", "7.2", "2022-2027")]);
    return ( 
        <>
        <button type="button">Add Education</button>
        <div className="inputs">
            <div className="ip-group">
                <input type="text" placeholder="Institute"/>
                <input type="text" placeholder="Course"/>
                <input type="number" placeholder="GPA"/>
                <input type="text" placeholder="Years"/>
            </div>
        </div>
        </>
    );
}

export default AddEducation;