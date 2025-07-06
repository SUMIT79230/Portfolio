const colors = ["#FF6B6B", "#FFA500", "#FFD93D", "#6BCB77", "#4D96FF", "#8E44AD", "#00C9A7", "#FF8C00", "#FF69B4", "#1ABC9C"];

const Skills = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            padding: "8vh 0",
            fontFamily: "'Poppins', sans-serif",
            background: "linear-gradient(135deg, #f8fafd 0%, #e6f0fa 100%)",
            position: "relative",
            overflow: "hidden"
        }}>
            {/* Decorative Top Line */}
            <div style={{
                width: "60%",
                height: "3px",
                background: "linear-gradient(90deg, transparent, #3498db, #2ecc71, transparent)",
                margin: "0 auto 6vh",
                borderRadius: "3px",
                boxShadow: "0 2px 8px rgba(52, 152, 219, 0.3)"
            }}></div>

            {/* Main Header with Gradient Underline */}
            <h1 style={{
                fontSize: "5vh",
                color: "#2c3e50",
                margin: "0 0 6vh 0",
                fontWeight: "700",
                position: "relative",
                display: "inline-block",
                '&:after': {
                    content: '""',
                    position: "absolute",
                    bottom: "-10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "80px",
                    height: "4px",
                    background: "linear-gradient(90deg, #3498db, #2ecc71)",
                    borderRadius: "2px"
                }
            }}>Technical Skills</h1>

            {/* Skills Container */}
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "4vh",
                width: "85%",
                maxWidth: "1400px"
            }}>

                {/* Skill Card Component */}
                {[
                    {
                        title: "Languages",
                        skills: ["C", "C++", "JavaScript", "TypeScript", "Python", "Java", "SQL", "HTML5", "CSS"]
                    },
                    {
                        title: "Frameworks",
                        skills: ["NodeJS", "ReactJS", "Java Spring", "SpringBoot", "Redux", "Express"]
                    },
                    {
                        title: "Database",
                        skills: ["MongoDB", "SQL", "PostgreSQL", "DynamoDB", "Firebase"]
                    },
                    {
                        title: "DevOps & Tools",
                        skills: ["Git & GitHub", "Docker", "JIRA", "Postman", "VS Code", "AWS Services", "CI/CD"]
                    }
                ].map((category, catIndex) => (
                    <div key={catIndex} style={{
                        backgroundColor: "white",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                        borderRadius: "16px",
                        padding: "3vh",
                        width: "425px",
                        minHeight: "180px",
                        transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                        cursor: "pointer",
                        border: "1px solid rgba(0, 0, 0, 0.05)",
                        overflow: "hidden",
                        position: "relative",
                        '&:hover': {
                            transform: "translateY(-8px)",
                            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.12)",
                            borderColor: "rgba(52, 152, 219, 0.3)"
                        },
                        '&:before': {
                            content: '""',
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "5px",
                            height: "100%",
                            background: `linear-gradient(to bottom, ${colors[catIndex * 2 % colors.length]}, ${colors[(catIndex * 2 + 1) % colors.length]})`,
                            transition: "all 0.3s ease"
                        }
                    }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = "translateY(-8px)";
                            e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.12)";
                            e.currentTarget.style.borderColor = "rgba(52, 152, 219, 0.3)";
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.08)";
                            e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.05)";
                        }}
                    >
                        <h3 style={{ 
                            color: "#2c3e50", 
                            margin: "0 0 2vh 0",
                            fontSize: "2.2vh",
                            fontWeight: "700",
                            position: "relative",
                            paddingLeft: "1vh"
                        }}>
                            {category.title}
                        </h3>

                        <div style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "1.2vh",
                            paddingLeft: "1vh"
                        }}>
                            {category.skills.map((skill, index) => (
                                <div key={index} style={{
                                    background: `linear-gradient(135deg, ${colors[(catIndex * 2 + index) % colors.length]}, ${colors[(catIndex * 2 + index + 1) % colors.length]})`,
                                    padding: "0.8vh 1.8vh",
                                    borderRadius: "20px",
                                    fontSize: "1.8vh",
                                    color: "white",
                                    whiteSpace: "nowrap",
                                    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                                    boxShadow: "0 3px 8px rgba(0, 0, 0, 0.15)",
                                    cursor: "pointer",
                                    fontWeight: "500",
                                    '&:hover': {
                                        transform: "scale(1.1) translateY(-2px)",
                                        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.25)"
                                    }
                                }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = "scale(1.1) translateY(-2px)";
                                        e.currentTarget.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.25)";
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = "scale(1)";
                                        e.currentTarget.style.boxShadow = "0 3px 8px rgba(0, 0, 0, 0.15)";
                                    }}
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Decorative Bottom Line */}
            <div style={{
                width: "60%",
                height: "3px",
                background: "linear-gradient(90deg, transparent, #2ecc71, #3498db, transparent)",
                margin: "6vh auto 0",
                borderRadius: "3px",
                boxShadow: "0 2px 8px rgba(46, 204, 113, 0.3)"
            }}></div>
        </div>
    );
};

export default Skills;