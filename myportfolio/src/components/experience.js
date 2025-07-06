const experiences = [
    {
        title: "KPIT Technologies",
        duration: "July 2024 – Present",
        role: "Software Engineer",
        tools: "JavaScript, TypeScript, ReactJS, Redux, Git, Jira",
        description: [
            "Delivered a fault-tolerant React and Redux dashboard for 1K+ users/month, reducing runtime errors by 30% and accelerating development with TypeScript integration.",
            "Implemented a scalable user feedback analytics system (Likes, Dislike, Comments) on Gen AI and Label report tags, resulting in a 25% increase in user interaction.",
            "Secured application infrastructure with AWS Cognito (JWT/OAuth) and worked on user management module.",
            "Focused on performance optimization, system reliability, and cloud services.",
            "Mentored developers and fostered technical excellence in fast-paced environments.",
            "Achieved 100% sprint goal completion across 10+ Scrum sprints by streamlining Agile workflows and reducing cycle time by 25% via Jira."
        ]
    },
    {
        title: "KPIT Technologies - Intern",
        duration: "Dec 2023 - July 2024",
        role: "Intern",
        tools: "Spring Boot, Hibernate, PostgreSQL, REST API, Maven, Git, GitHub, CI/CD",
        description: [
            "Architected a scalable Spring Boot microservice with Hibernate, PostgreSQL, implementing REST API and Maven build automation.",
            "Implemented Git version control with GitHub, achieving 100% merge success rate through proper branching strategies (Git Flow) and CI/CD integration."
        ]
    }
];

const Experience = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            padding: "8vh 2vh",
            fontFamily: "'Poppins', sans-serif",
            width: "100%",
            backgroundColor: "#f8fafd",
            background: "linear-gradient(135deg, #f8fafd 0%, #e6f0fa 100%)"
        }}>
            <h1 style={{
                fontSize: "5vh",
                color: "#2c3e50",
                marginBottom: "6vh",
                fontWeight: "700",
                position: "relative",
                display: "inline-block",
                '&:after': {
                    content: '""',
                    position: "absolute",
                    bottom: "-10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "60px",
                    height: "4px",
                    background: "linear-gradient(90deg, #3498db, #2ecc71)",
                    borderRadius: "2px"
                }
            }}>Experience</h1>

            <div style={{
                position: "relative",
                width: "80%",
                maxWidth: "1200px",
                paddingLeft: "4vh"
            }}>
                {/* Animated Vertical Line */}
                <div style={{
                    position: "absolute",
                    left: "0",
                    top: "0",
                    bottom: "0",
                    width: "4px",
                    background: "linear-gradient(to bottom, #3498db, #2ecc71)",
                    borderRadius: "2px",
                    boxShadow: "0 0 10px rgba(52, 152, 219, 0.3)"
                }}></div>

                {experiences.map((exp, index) => (
                    <div key={index} style={{
                        display: "flex",
                        alignItems: "flex-start",
                        marginBottom: "8vh",
                        position: "relative",
                        transition: "all 0.5s ease"
                    }}>
                        {/* Animated Dot on the timeline */}
                        <div style={{
                            width: "24px",
                            height: "24px",
                            background: "linear-gradient(135deg, #3498db, #2ecc71)",
                            border: "3px solid white",
                            borderRadius: "50%",
                            position: "absolute",
                            left: "-14px",
                            top: "10px",
                            zIndex: "2",
                            boxShadow: "0 0 0 4px rgba(52, 152, 219, 0.3)",
                            transition: "all 0.3s ease",
                            '&:hover': {
                                transform: "scale(1.2)",
                                boxShadow: "0 0 0 6px rgba(52, 152, 219, 0.4)"
                            }
                        }}></div>

                        {/* Experience Card */}
                        <div style={{
                            backgroundColor: "white",
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                            borderRadius: "16px",
                            padding: "3vh",
                            width: "100%",
                            transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                            cursor: "pointer",
                            border: "1px solid rgba(0, 0, 0, 0.05)",
                            marginLeft: "30px",
                            overflow: "hidden",
                            position: "relative",
                            '&:hover': {
                                transform: "translateY(-5px)",
                                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.12)",
                                borderColor: "rgba(52, 152, 219, 0.3)"
                            },
                            '&:before': {
                                content: '""',
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "4px",
                                height: "100%",
                                background: "linear-gradient(to bottom, #3498db, #2ecc71)",
                                transition: "all 0.3s ease"
                            }
                        }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = "translateY(-5px)";
                                e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.12)";
                                e.currentTarget.style.borderColor = "rgba(52, 152, 219, 0.3)";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.08)";
                                e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.05)";
                            }}
                        >
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "1.5vh"
                            }}>
                                <h2 style={{ 
                                    color: "#2c3e50", 
                                    margin: "0",
                                    fontSize: "2.2vh",
                                    fontWeight: "700"
                                }}>
                                    {exp.title}
                                </h2>
                                <span style={{
                                    backgroundColor: "#e8f4fc",
                                    color: "#3498db",
                                    padding: "0.5vh 1.5vh",
                                    borderRadius: "20px",
                                    fontSize: "1.8vh",
                                    fontWeight: "600"
                                }}>
                                    {exp.duration}
                                </span>
                            </div>

                            <h4 style={{ 
                                color: "#3498db", 
                                margin: "0.5vh 0 1.5vh 0",
                                fontSize: "2vh",
                                fontWeight: "600"
                            }}>
                                {exp.role}
                            </h4>

                            <div style={{
                                backgroundColor: "#f5f9fd",
                                padding: "1.5vh",
                                borderRadius: "8px",
                                marginBottom: "2vh"
                            }}>
                                <p style={{ 
                                    margin: "0",
                                    color: "#34495e",
                                    fontSize: "1.8vh",
                                    lineHeight: "1.5"
                                }}>
                                    <span style={{ fontWeight: "600" }}>Technologies: </span>
                                    {exp.tools}
                                </p>
                            </div>

                            <ul style={{ 
                                paddingLeft: "2vh",
                                margin: "0"
                            }}>
                                {exp.description.map((point, i) => (
                                    <li key={i} style={{ 
                                        marginBottom: "1.5vh",
                                        color: "#34495e",
                                        fontSize: "1.8vh",
                                        lineHeight: "1.5",
                                        position: "relative",
                                        '&:before': {
                                            content: '""',
                                            position: "absolute",
                                            left: "-15px",
                                            top: "0.8vh",
                                            width: "6px",
                                            height: "6px",
                                            backgroundColor: "#3498db",
                                            borderRadius: "50%"
                                        }
                                    }}>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;