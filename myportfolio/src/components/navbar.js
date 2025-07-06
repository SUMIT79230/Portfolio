import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
  { label: "About", link: "about" },
  { label: "Skills", link: "skills" },
  { label: "Experience", link: "experience" },
  { label: "Projects", link: "projects" },
  { label: "Contact", link: "contact" }
];

  return (
    <div 
      className="navbar"
      style={{
        width: "100%",
        backgroundColor: scrolled ? "rgba(10, 10, 10, 0.95)" : "rgba(0, 0, 0, 0.9)",
        backdropFilter: "blur(10px)",
        fontFamily: "'Poppins', sans-serif",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
        position: "fixed",
        top: 0,
        zIndex: 1000,
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "none",
        transition: "all 0.4s ease-out"
      }}
    >
      <div style={{
        display: "flex",
        flexDirection: "row",
        height: "12vh",
        maxWidth: "1400px",
        margin: "0 auto",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 5%",
      }}>
        {/* Logo with CSS animation */}
        <div 
          style={{
            color: "#fff",
            fontSize: "3vh",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            cursor: "pointer",
            transition: "transform 0.3s ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          <div 
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #3498db, #2ecc71)",
              boxShadow: "0 0 15px rgba(52, 152, 219, 0.5)",
              animation: "pulse 2s infinite"
            }}
          />
          Portfolio
        </div>

        {/* Navigation Links */}
        <div style={{
          display: "flex",
          gap: "8px",
          alignItems: "center"
        }}>
          
        {navItems.map((item, index) => (
            <div 
                key={index}
                style={{ 
                position: "relative",
                transition: "transform 0.3s ease",
                transform: hoveredLink === item.label ? "translateY(-2px)" : "none"
                }}
                onMouseEnter={() => setHoveredLink(item.label)}
                onMouseLeave={() => setHoveredLink(null)}
            >
                <a 
                href={`#${item.link}`}
                onClick={() => setActiveLink(item.label)}
                style={{
                    color: activeLink === item.label ? "#2ecc71" : "#fff",
                    textDecoration: "none",
                    fontSize: "2.2vh",
                    padding: "12px 20px",
                    borderRadius: "8px",
                    transition: "all 0.3s ease",
                    fontWeight: activeLink === item.label ? "600" : "500",
                    opacity: activeLink === item.label ? 1 : 0.9
                }}
                >
                {item.label}
                {activeLink === item.label && (
                    <div 
                    style={{
                        position: "absolute",
                        bottom: "8px",
                        left: "20px",
                        right: "20px",
                        height: "2px",
                        backgroundColor: "#2ecc71",
                        borderRadius: "2px",
                        transition: "all 0.3s ease"
                    }}
                    />
                )}
                </a>
            </div>
            ))}
        </div>
      </div>

      {/* Add this to your global CSS */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;