
function Education({institute, gpa, course, dates}) {
    return ( 
        <div className="edu">
            <div className="date">{dates}</div>
            <div className="info"><h4>{institute}</h4><div>{course}</div> </div>
            <div className="gpa">{gpa ? gpa + " GPA":""}</div>
        </div>
     );
}

export default Education;