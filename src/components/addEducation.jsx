import { useState } from "react";

function Education(institute, course, gpa, dates) {
    this.id = Math.floor(Math.random() * 100)
    this.institute = institute;
    this.course = course;
    this.gpa = gpa;
    this.dates = dates;
}

function AddEducation({ callback }) {
    const [no, setNo] = useState(0);
    function getAllEducation() {
        const targets = document.querySelectorAll('.education');
        const data = [...targets].map(elem => {
            return new Education(
                elem.querySelector('input[name=institute]').value,
                elem.querySelector('input[name=course]').value,
                elem.querySelector('input[name=gpa]').value,
                elem.querySelector('input[name=years]').value
            )
        });

        callback(data);
    }
    const jsx = [];

    for (let i = 0; i < no; i++) {
        jsx.push(
            <div className="ip-group education">
                <input type="text" placeholder="Institute" name="institute" onChange={getAllEducation}/>
                <input type="text" placeholder="Course" name='course' onChange={getAllEducation}/>
                <input type="number" placeholder="GPA" name='gpa' onChange={getAllEducation}/>
                <input type="text" placeholder="Years" name='years' onChange={getAllEducation}/>
                <hr style={{ color: "black", width: "80%" }} />
            </div>
        )
    }

    return (
        <>
            <button type="button" onClick={() => setNo(no + 1)}>Add Education</button>
            <div className="inputs">
                {
                    jsx
                }
                {/* <button type="submit" className="submit" onClick={getAllEducation}>Submit</button> */}
            </div>
        </>
    );
}

export default AddEducation;