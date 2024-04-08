import '../styles/content.css';
import ContentSection from './contentSection.jsx';
import Project from './project.jsx';
import Education from './Education.jsx';
import Skills from './skills.jsx';

export default function Content() {
    return (
    <div className="content">
        <ContentSection title="summary">
            Backend developer with strong proficiency in JavaScript frameworks, looking for opportunities to develop and enhance my skills in the relevant field. I am a quick learner and am always improving myself
        </ContentSection>
        <ContentSection title="projects">
            <Project/>
            <Project/>
            <Project/>
        </ContentSection>
        <ContentSection title="Education" padding='0px'>
            <Education/>
            <Education />
        </ContentSection>
        <ContentSection title="Skills">
            <Skills />
        </ContentSection>
    </div>
    )
}