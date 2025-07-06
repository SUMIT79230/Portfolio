import { useState, useEffect } from 'react';
import profile from "../assets/My_pic.jpg";
import resume from "../assets/Sumit_Kumar_resume.pdf";
import { FaLinkedin, FaGithub, FaFileDownload, FaEnvelope } from 'react-icons/fa';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setImageLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="Main-about" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "90vh",
      width: "100%",
      backgroundColor: "#f8fafd",
      padding: "8vh 0",
      fontFamily: "'Poppins', sans-serif",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Decorative top border */}
      <div style={{
        position: "absolute",
        top: "0",
        width: "100%",
        height: "4px",
        background: "linear-gradient(90deg, #3498db, #2ecc71)",
        boxShadow: "0 2px 10px rgba(52, 152, 219, 0.3)"
      }}></div>

      <div style={{
        display: "flex",
        width: "85%",
        maxWidth: "1400px",
        height: "65vh",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
        borderRadius: "15px",
        overflow: "hidden",
        position: "relative"
      }}>
        {/* Left Profile Section */}
        <div 
          className="left-section" 
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "35%",
            background: "linear-gradient(145deg, #2c3e50, #1a1a2e)",
            alignItems: "center",
            justifyContent: "center",
            padding: "4vh",
            transition: "all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
            zIndex: "2",
            transform: isHovered ? "translateX(-8px) rotateY(5deg)" : "translateX(0)",
            perspective: "1000px"
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Profile Image */}
          <div 
            className="image-section" 
            style={{
              display: "flex",
              height: "28vh",
              width: "28vh",
              backgroundColor: "#fff",
              borderRadius: "50%",
              overflow: "hidden",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
              marginBottom: "4vh",
              position: "relative",
              transform: imageLoaded ? "scale(1)" : "scale(0.8)",
              opacity: imageLoaded ? 1 : 0,
              transition: "all 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
              border: "4px solid rgba(255, 255, 255, 0.15)"
            }}
          >
            <img 
              src={profile} 
              style={{ 
                width: "100%", 
                height: "100%", 
                objectFit: "cover",
              }} 
              alt="Profile" 
              onLoad={() => setImageLoaded(true)}
            />
            {/* Glow effect */}
            <div style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              boxShadow: isHovered 
                ? "inset 0 0 30px rgba(52, 152, 219, 0.4), 0 0 40px rgba(52, 152, 219, 0.3)" 
                : "inset 0 0 20px rgba(52, 152, 219, 0.2)",
              transition: "all 0.5s ease"
            }}></div>
          </div>
          
          <div 
            className="detail" 
            style={{
              textAlign: "center",
              transform: isHovered ? "translateY(-5px)" : "translateY(0)",
              transition: "all 0.4s ease",
              opacity: imageLoaded ? 1 : 0,
              transitionDelay: "0.3s"
            }}
          >
            <h1 style={{
              fontSize: "4.5vh",
              color: "#ffffff",
              margin: "1vh 0",
              fontWeight: "700",
              letterSpacing: "0.5px",
              textShadow: "0 2px 8px rgba(0,0,0,0.4)"
            }}>Sumit Kumar</h1>
            
            <h2 style={{
              fontSize: "2.8vh",
              color: "#3498db",
              fontWeight: "600",
              margin: "0.5vh 0 2vh 0",
              textShadow: "0 1px 3px rgba(0,0,0,0.3)"
            }}>Software Engineer</h2>
            
          </div>
        </div>

        {/* Right Content Section */}
        <div 
          className="right-section" 
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "65%",
            background: "#ffffff",
            padding: "6vh 5vh",
            transition: "all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
            position: "relative",
            overflow: "hidden",
            transform: isHovered ? "translateX(8px)" : "translateX(0)"
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h2 style={{
            fontSize: "3.8vh",
            color: "#2c3e50",
            marginBottom: "3vh",
            fontWeight: "700",
            position: "relative",
            display: "inline-block",
            zIndex: 1
          }}>
            About Me
            <span style={{
              position: "absolute",
              bottom: "-8px",
              left: "0",
              width: "60px",
              height: "4px",
              background: "linear-gradient(90deg, #3498db, #2ecc71)",
              borderRadius: "2px"
            }}></span>
          </h2>
          
          <p style={{
  fontSize: "2.4vh",
  lineHeight: "1.6",
  color: "#2c3e50",
  marginBottom: "3vh",
  fontWeight: "500",
  zIndex: 1,
  position: "relative",
  background: "linear-gradient(90deg, rgba(255,255,255,0.95), rgba(255,255,255,0.95))",
  padding: "1.5vh",
  borderRadius: "10px"
}}>
  Hi, I'm <span style={{ color: "#3498db", fontWeight: "600" }}>Sumit Kumar</span>, a Software Engineer at <span style={{ color: "#3498db", fontWeight: "600" }}>KPIT Technologies</span> with a strong foundation in full-stack development and scalable application design.
  <br /><br />
  I hold a <span style={{ color: "#2ecc71", fontWeight: "600" }}>B.Tech in Computer Science & Engineering</span> from <span style={{ color: "#2ecc71", fontWeight: "600" }}>Kalinga Institute of Industrial Technology</span>, graduating with a <span style={{ color: "#f39c12", fontWeight: "600" }}>CGPA of 8.84</span>.
</p>



          
          {/* Social Media Icons Section */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "3vh",
            margin: "6vh 1vh 2vh 2vh",
            zIndex: 1
          }}>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/sumit-kumar79230/" target="_blank" rel="noopener noreferrer" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#0077B5",
              color: "white",
              fontSize: "24px",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              '&:hover': {
                transform: "translateY(-5px) scale(1.1)",
                boxShadow: "0 8px 15px rgba(0, 119, 181, 0.3)"
              }
            }}>
              <FaLinkedin />
            </a>

            {/* GitHub */}
            <a href="https://github.com/SUMIT79230" target="_blank" rel="noopener noreferrer" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#333",
              color: "white",
              fontSize: "24px",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              '&:hover': {
                transform: "translateY(-5px) scale(1.1)",
                boxShadow: "0 8px 15px rgba(51, 51, 51, 0.3)"
              }
            }}>
              <FaGithub />
            </a>


            {/* Email */}
            <a href="mailto:Kumarsumit.work1@gmail.com" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#D44638",
              color: "white",
              fontSize: "24px",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              '&:hover': {
                transform: "translateY(-5px) scale(1.1)",
                boxShadow: "0 8px 15px rgba(212, 70, 56, 0.3)"
              }
            }}>
              <FaEnvelope />
            </a>

            <a href={resume} download style={{
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  backgroundColor: "#4CAF50",
  color: "white",
  fontSize: "24px",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  cursor: "pointer"
}}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-5px) scale(1.1)";
    e.currentTarget.style.boxShadow = "0 8px 15px rgba(76, 175, 80, 0.3)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "none";
    e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
  }}
>
  <FaFileDownload />
</a>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;