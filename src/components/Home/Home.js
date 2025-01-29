import "./Home.css";
import myPhoto from "../../assets/eugene.jpg";
import Skills from "../Util/Skills/Skills.js";
import Project from "../Util/Project/Project.js";
import projectPreview1 from "../../assets/project1-preview.jpg";
import projectPreview2 from "../../assets/project2-preview.png";
import projectPreview3 from "../../assets/project3-preview.png";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.png";
import { useState } from "react";
import Box from "../Util/Box/Box.js";
import DetailedProject from "../Util/Detailed-Project/DetailedProject.js";

const projectData = [
    {
        id: 1,
        title: "Two-Tower Recommendation System",
        skillList: [
            "Two-Tower Recommendation System",
            "Deep Learning",
            "Recommendation System",
            "Neural Network Architecture",
        ],
        description:
            "This project implements a two-tower recommendation system to analyze whether incorporating album features improves model performance.",
        img: projectPreview1,
        fullDescription:
            "This project explores the development of a two-tower recommendation system, incorporating album features to evaluate their impact on model performance. The primary goal is to determine whether including album information enhances the accuracy and efficiency of the recommendation system. The project involves: Building and training a two- tower recommendation model. Integrating album metadata as part of the input features. Comparing performance metrics with and without album incorporation. The link above redirects you to the repo that includes the code, datasets(or links to them), and results from the experiments, providing insights into how album information influences recommendation systems.",
        fullImg: project1,
        projectLink: 'https://github.com/eugeniapramesti/two-tower-recommendation-system',
    },
    {
        id: 2,
        title: "Customer Sentiment Analysis",
        skillList: [
            "LSTM (Long Short-Term Memory)",
            "Deep Learning",
            "Sentiment Analysis",
        ],
        description:
            "This project uses deep learning and NLP with LSTM to analyze customer comments and predict sentiment as positive or negative.",
        img: projectPreview2,
        fullDescription: 'This project involves building a deep learning model to analyze customer comments and predict sentiment labels as positive or negative. By leveraging natural language processing and LSTM (Long Short-Term Memory) networks, the model captures the context and sequence of words to deliver accurate predictions.',
        fullImg: project2,
        projectLink: 'https://github.com/eugeniapramesti/Sentiment-Analysis',
    },
    {
        id: 3,
        title: "Stock Prediction Using CNN-BiLSTM Model",
        skillList: [
            "Convolutional Neural Networks (CNN)",
            "Bidirectional Long Short Term Memory (BiLSTM)",
            "Deep Learning",
        ],
        description:
            "This project predicts BBCA stock prices using a hybrid CNN-BiLSTM model, achieving high accuracy and low error rates for reliable forecasting.",
        img: projectPreview3,
        fullDescription: `This project focuses on predicting stock prices for BBCA (Bank Central Asia) in the Indonesian stock market using a hybrid deep learning approach that combines Convolutional Neural Networks (CNN) and Bidirectional Long Short-Term Memory (BiLSTM) models. The model was trained and evaluated on historical stock data to achieve high accuracy in capturing temporal dependencies and trends. Performance Metrics(after testing): Loss: 0.0010, Mean Squared Error(MSE): 0.0010, Mean Absolute Error(MAE): 0.0232, Root Mean Squared Error(RMSE): 0.0317. These results demonstrate the model's excellent predictive accuracy and low error rates, making it a reliable tool for forecasting BBCA stock prices.`,
        fullImg: project3,
        projectLink: 'https://github.com/eugeniapramesti/Stock-Prediction'
    },
];

const experienceData = [
    {
        id: 1,
        date: "June 2024- February 2025",
        jobTitle: "Client Engineer Intern",
        jobDescription: `• Full-Stack MVP Development: Contributed to building Minimum Viable Products (MVPs) from Proof of Concepts (PoC) and use cases, delivering comprehensive full-stack solutions.• AI and API Implementation: Developed and deployed AI and machine learning models, including prompt-based systems and Retrieval-Augmented Generation (RAG), transforming the models into scalable APIs. • SQL and Database Interaction: Utilized SQL to interact with databases, retrieving and processing data for AI models. • Business Intelligence and Analytics: Utilized IBM Cognos Analytics to design reports and dashboards, providing actionable insights for decision-making. • Deployment and DevOps: Deployed and managed websites and APIs on Ubuntu servers using Docker.`,
        skillList: [
            "Python",
            "SQL",
            "Retrieval Augmented Generation (RAG)",
            "Large Language Model (LLM)",
            "IBM Cognos Analytcis",
            "WatsonX",
            "Milvus",
            "Docker",
            "Git",
            "Ubuntu",
            "ReactJS",
            "Neo4j",
            "FastAPI",
            "Watson Assistant",
            "Cloud Object Storage",
            "Flask",
            "Machine Learning",
        ],
        split: true,
    },
    {
        id: 2,
        date: "February 2024 - June 2024",
        jobTitle: "Application Developer Intern",
        jobDescription: `• Optimized internal web applications by integrating Artificial Intelligence for enhanced functionality and performance. 
        • Contributed to the development of a machine learning-based recommendation system.`,
        skillList: [
            "Artificial Intelligence",
            "Recommendation System",
            "Machine Learning",
            "Deep Learning",
        ],
        split: true,
    },
];

const educationData = [
    {
        id: 1,
        date: "2021-2025",
        jobTitle: "Computer Science at Bina Nusantara University",
        description:
            "GPA: 3.85/4.00, with a concentration in Artificial Intelligence. I specialize in Machine Learning (ML), Deep Learning (DL), Natural Language Processing (NLP), Speech Recognition, and Computer Vision, gaining hands-on experience through numerous AI projects and applying advanced AI techniques to solve real-world problems.",
        split: false,
    },
];

export default function Home() {
    const [selectedProject, setSelectedProject] = useState(null);

    function onHandleSelected(id) {
        setSelectedProject(id);
    }

    return (
        <div className="home-container">
            {/* left box */}
            <div className="left-container">
                {/* Biography */}
                <div className="biography-container">
                    <img src={myPhoto} alt="my-photo" className="my-photo" />

                    <div className="description-container">
                        <h2 className="name-text">Eugenia Pramesti Simabrata</h2>
                        <p className="job-text">Data and AI Enthusiast</p>
                        <p className="based-text">Based in DKI Jakarta, IDN</p>
                    </div>

                    <div className="logo-container">
                        {/* linkedin */}
                        <a
                            className="linkedin-logo"
                            href="https://www.linkedin.com/in/eugeniapramesti/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                width={"24px"}
                                height={"24px"}
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        {/* linkedin */}

                        {/* github */}
                        <a
                            className="github-logo"
                            href="https://github.com/eugeniapramesti"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                width={"24px"}
                                height={"24px"}
                                class="w-5 h-5 m-1.5"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                            </svg>
                        </a>
                        {/* github */}

                        {/* email */}
                        <a
                            className="email-logo"
                            href="mailto:eugenia301003@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                width={"24px"}
                                height={"24px"}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14a1.75 1.75 0 0 1-1.75 1.75H1.75A1.75 1.75 0 0 1 0 18.75v-14C0 3.784.784 3 1.75 3ZM1.5 7.412V18.75c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0Zm0-2.662v.852l10.36 7a.25.25 0 0 0 .28 0l10.36-7V4.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z"></path>
                            </svg>
                        </a>
                        {/* email */}
                    </div>
                </div>
                {/* Biography */}

                {/* About */}
                <div className="about-container">
                    <p className="about-text">About</p>
                    <p className="description">
                        I am a fourth-year Computer Science student at Bina Nusantara
                        University, specializing in Artificial Intelligence. Passionate
                        about data and AI, I focus on building and deploying innovative
                        solutions using machine learning, deep learning, and cutting-edge
                        technologies like LLMs and RAG. Recently, I worked on a two-tower
                        recommendation system project, showcasing my all-rounder skills in
                        development and deployment.
                    </p>
                </div>
                {/* About */}

                {/* About */}
                <div className="skills-container">
                    <p className="skills-text">Skills</p>
                    <div className="detail-skills-container">
                        <Skills>Python</Skills>
                        <Skills>SQL</Skills>
                        <Skills>Deep Learning</Skills>
                        <Skills>Machine Learning</Skills>
                        <Skills>Retrieval Augmented Generation (RAG)</Skills>
                        <Skills>Large Language Model (LLM)</Skills>
                        <Skills>Milvus (Vector Database)</Skills>
                        <Skills>IBM Cognos Analytics</Skills>
                        <Skills>Docker</Skills>
                        <Skills>Ubuntu</Skills>
                        <Skills>Neo4j</Skills>
                    </div>
                </div>
                {/* About */}
            </div>
            {/* left box */}

            {/* right box */}
            <div className="right-container">
                {selectedProject === null ? (
                    <>
                        <div className="projects-container">
                            <h2 className="content-section-text">Projects</h2>
                            <div className="project-card-container">
                                {projectData.map((project) => (
                                    <Project
                                        key={project.id}
                                        project={project}
                                        handleSelected={onHandleSelected}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="experience-container">
                            <h2 className="content-section-text">Experience</h2>
                            <div className="card-container">
                                {experienceData.map((experience) => (
                                    <Box key={experience.id} data={experience} />
                                ))}
                            </div>
                        </div>

                        <div className="education-container">
                            <h2 className="content-section-text">Education</h2>
                            <div className="card-container">
                                {educationData.map((experience) => (
                                    <Box key={experience.id} data={experience} />
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <DetailedProject
                            selectedProject={projectData[selectedProject]}
                            handleSelected={onHandleSelected}
                        />
                    </>
                )}
            </div>
            {/* right box */}
        </div>
    );
}
