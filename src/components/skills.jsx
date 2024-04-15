const defSkills = [
    "JavaScript, with NodeJS, TypeScript, ExpressJS, TypeORM and Sequelize",
    "Database Management with SQL Server, MySQL, SQLite and MongoDB",
    "Native Apps with Flutter and Dart",
    "Python development",
    "HTML5, CSS3, TailwindCSS and JavaScript (DOM), JQuery, Webpack for Module Bundling.",
    "Git and GitHub for version control and collaboration.",
    "Linux server administration"
]

function Skills({ data }) {
    return (
        <ul>
            {data.map(skill => <li>{skill}</li>)}
        </ul>
    );
}

Skills.defaultProps = {
    skills: defSkills
}
export default Skills;