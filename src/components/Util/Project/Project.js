import Skills from "../Skills/Skills";
import "./Project.css";
import Button from "../Button/Button";

export default function Project({ project, handleSelected }) {
    return (
        <div key={project.id} className="project-container">
            <img className="project-img" src={project.img} alt="preview1" />
            <div className="project-description-container">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">
                    {project.description}
                </p>
                <div className="skills-list">
                    {project.skillList.map((skill, index) => (
                        <Skills>{skill}</Skills>
                    ))}
                </div>

                <Button buttonClicked={() => handleSelected(project.id - 1)} width={120}>Learn more</Button>
            </div>
        </div>
    );
}
