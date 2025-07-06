import { useState } from 'react';

const Projects = () => {
  const projects = [
    {
      name: "Web Chat Application",
      link: "https://github.com/SUMIT79230/Chat_App",
      tools: "JavaScript, React, Redux, Node.js, Socket.IO, MongoDB",
      description: [
        "Engineered low-latency messaging platform supporting 100+ concurrent users",
        "Implemented secure room-based access control with WebSockets",
        "Developed scalable REST APIs for real-time communication"
      ],
      accentColor: "#3498db"
    },
    {
      name: "GenAI Chat Assistant",
      link: "https://share.streamlit.io/app/banger/",
      tools: "Python, Streamlit, Google Gemini API, FAISS",
      description: [
        "Built predictive AI assistant with 90% query accuracy",
        "Created image captioning pipeline handling 20+ images/hour",
        "Reduced user research time by 65%"
      ],
      accentColor: "#2ecc71"
    }
  ];

  return (
    <section id="projects" style={{
      padding: "0.5rem 0.5rem",
      background: "linear-gradient(135deg, #f8fafd 0%, #e6f0fa 100%)",
      fontFamily: "'Poppins', sans-serif"
    }}>
            <div style={{
                width: "60%",
                height: "3px",
                background: "linear-gradient(90deg, transparent, #3498db, #2ecc71, transparent)",
                margin: "10vh auto 0vh",
                borderRadius: "3px",
                boxShadow: "0 2px 8px rgba(52, 152, 219, 0.3)"
            }}></div>
      <div style={{ maxWidth: "1200px", margin: "0 auto 4rem", textAlign: "center" }}>
        <h2 style={{
          fontSize: "3.8vh",
          color: "#2c3e50",
          marginBottom: "1rem",
          fontWeight: "700",
          position: "relative",
          display: "inline-block"
        }}>
          Projects
        </h2>
        <p style={{
          fontSize: "2.2vh",
          color: "#7f8c8d",
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: "1.6"
        }}>
          Featured work showcasing my technical capabilities and problem-solving approach
        </p>
      </div>

      {/* Project Cards Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "8rem",
        maxWidth: "1200px",
        width: "100%",
        margin: "0 auto",
        padding: "0 1rem",
        paddingBottom: "10vh",
      }}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      style={{
        width: "60vh",
        height : "50vh",
        perspective: "1000px",
        cursor: "pointer"
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div style={{
        position: "relative",
        width: "50vh",
        height: "100%",
        transition: "transform 0.6s ease",
        transformStyle: "preserve-3d",
        transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)",
        borderRadius: "12px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
        // justifyContent:"center",

      }}>
        {/* Front Side */}
        <div style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backfaceVisibility: "hidden",
          background: `linear-gradient(135deg, ${project.accentColor}20, #fff)`,
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0rem",
          border: `1px solid ${project.accentColor}20`
        }}>
          <div style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${project.accentColor}, ${project.accentColor}20)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1.5rem",
            color: "#fff",
            fontSize: "1.8rem",
            fontWeight: "bold",
            boxShadow: `0 4px 12px ${project.accentColor}20`
          }}>
            {project.name.charAt(0)}
          </div>
          <h3 style={{
            fontSize: "2.2vh",
            color: "#2c3e50",
            marginBottom: "0.5rem",
            fontWeight: "600",
            textAlign: "center"
          }}>
            {project.name}
          </h3>
          <p style={{
            color: "#7f8c8d",
            fontSize: "1.8vh",
            textAlign: "center",
            marginBottom: "1.5rem"
          }}>
            Click to view details
          </p>
          <div style={{
            width: "40px",
            height: "4px",
            background: project.accentColor,
            borderRadius: "2px",
            opacity: "0.7"
          }}></div>
        </div>

        {/* Back Side */}
        <div style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backfaceVisibility: "hidden",
          background: "#fff",
          borderRadius: "12px",
          transform: "rotateY(180deg)",
          padding: "0.5rem",
          overflow: "auto",
          border: `1px solid ${project.accentColor}20`
        }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem"
          }}>
            <h3 style={{
              fontSize: "2.2vh",
              color: project.accentColor,
              fontWeight: "600"
            }}>
              {project.name}
            </h3>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: project.accentColor,
                textDecoration: "none",
                fontWeight: "500",
                fontSize: "1.8vh",
                display: "flex",
                alignItems: "center",
                '&:hover': {
                  textDecoration: "underline"
                }
              }}
            >
              View Project →
            </a>
          </div>
          
          <p style={{
            color: "#7f8c8d",
            fontSize: "1.7vh",
            marginBottom: "1.5rem",
            fontStyle: "italic"
          }}>
            <b>Technologies:</b> {project.tools}
          </p>
          
          <ul style={{
            paddingLeft: "1.2rem",
            color: "#2c3e50"
          }}>
            {project.description.map((point, i) => (
              <li key={i} style={{ 
                marginBottom: "1rem",
                fontSize: "1.8vh",
                lineHeight: "1.5",
                position: "relative"
              }}>
                <span style={{
                  position: "absolute",
                  left: "-1.2rem",
                  color: project.accentColor,
                  fontWeight: "bold"
                }}>•</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;