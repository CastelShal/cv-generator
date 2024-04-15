import '../styles/content.css';
import ContentSection from './contentSection.jsx';
import Project from './project.jsx';
import Education from './Education.jsx';
import Skills from './skills.jsx';

export default function Content({summary, skills, projects, education}) {
    return (
    <div className="content">
        <ContentSection title="summary">
           {summary ?? 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor omnis eius perferendis voluptatum enim cupiditate ipsum commodi? Deserunt officia placeat explicabo, nihil ab ea consequuntur voluptas nulla quo quisquam laborum!'}
        </ContentSection>
        <ContentSection title="projects">
            {
            projects.map(proj => 
                <Project key={proj.key} title={proj.name || null} description={proj.desc || null}/>
            )
            }
            {/* <Project/>
            <Project/>
            <Project/> */}
        </ContentSection>
        <ContentSection title="Education" padding='0px'>
            {
                education.map(edu => 
                <Education {...edu}/>
            )
            }
            <Education/>
            <Education />
        </ContentSection>
        <ContentSection title="Skills">
            <Skills data={skills}/>
        </ContentSection>
    </div>
    )
}