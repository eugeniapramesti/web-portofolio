import "./Box.css";
import Skills from "../Skills/Skills";
export default function Box({ data }) {
    let descriptionList = [''];
    if (data.split) {
        // Split the string by bullet points and filter out empty strings
        descriptionList = data.jobDescription
            .split("•")
            .map((item) => item.trim())
            .filter((item) => item.length > 0);
    }



    return (
        <div className="box-container">
            <p className="date-text">{data.date}</p>
            <p className="title-text">{data.jobTitle}</p>
            {data.split === true ? (
                <>
                    <ul className="desc-list">
                        {descriptionList.map((desc, index) => (
                            <li key={index} className="desc-list">
                                {desc}
                            </li>
                        ))}
                    </ul>
                    <div className="skills-list">
                        {data.skillList.map((skill) => (
                            <Skills>{skill}</Skills>
                        ))}
                    </div>
                </>
            ) : (
                <p className="desc-text">{data.description}</p>
            )}


        </div>
    );
}
