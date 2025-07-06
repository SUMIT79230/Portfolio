import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_USER_ID
    )
    .then(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(() => {
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" style={{
      padding: "6rem 2rem",
      background: "linear-gradient(135deg, #f8fafd 0%, #e6f0fa 100%)",
      fontFamily: "'Poppins', sans-serif"
    }}>
        <div style={{
                width: "60%",
                height: "3px",
                background: "linear-gradient(90deg, transparent, #3498db, #2ecc71, transparent)",
                margin: "2vh auto 0vh",
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
          Get In Touch
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
          fontSize: "2.2vh",
          color: "#7f8c8d",
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: "1.6"
        }}>
          Have a project in mind or want to discuss opportunities?
        </p>
      </div>

      <div style={{
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#fff",
        borderRadius: "12px",
        padding: "3rem",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)"
      }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "2rem" }}>
            <label htmlFor="name" style={{
              display: "block",
              marginBottom: "0.5rem",
              color: "#2c3e50",
              fontWeight: "500",
              fontSize: "1.8vh"
            }}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.8rem 1rem",
                borderRadius: "8px",
                border: "1px solid #ddd",
                fontSize: "1.7vh"
              }}
            />
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <label htmlFor="email" style={{
              display: "block",
              marginBottom: "0.5rem",
              color: "#2c3e50",
              fontWeight: "500",
              fontSize: "1.8vh"
            }}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.8rem 1rem",
                borderRadius: "8px",
                border: "1px solid #ddd",
                fontSize: "1.7vh"
              }}
            />
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <label htmlFor="message" style={{
              display: "block",
              marginBottom: "0.5rem",
              color: "#2c3e50",
              fontWeight: "500",
              fontSize: "1.8vh"
            }}>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{
                width: "100%",
                padding: "0.8rem 1rem",
                borderRadius: "8px",
                border: "1px solid #ddd",
                fontSize: "1.7vh",
                resize: "vertical",
                minHeight: "120px"
              }}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              background: "linear-gradient(90deg, #3498db, #2ecc71)",
              color: "#fff",
              border: "none",
              padding: "1rem 2rem",
              borderRadius: "8px",
              fontSize: "1.8vh",
              fontWeight: "600",
              cursor: "pointer",
              width: "100%"
            }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {submitStatus === 'success' && (
            <p style={{
              color: "#2ecc71",
              textAlign: "center",
              marginTop: "1.5rem",
              fontSize: "1.7vh"
            }}>
              Message sent successfully!
            </p>
          )}

          {submitStatus === 'error' && (
            <p style={{
              color: "#e74c3c",
              textAlign: "center",
              marginTop: "1.5rem",
              fontSize: "1.7vh"
            }}>
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>

      <div style={{
        maxWidth: "600px",
        margin: "3rem auto 0",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        flexWrap: "wrap"
      }}>
        <a href="mailto:your.email@example.com" style={{
          display: "flex",
          alignItems: "center",
          color: "#2c3e50",
          textDecoration: "none",
          fontSize: "1.8vh"
        }}>
          ✉️ Kumarsumit.work1@gmail.com
        </a>
        <a href="tel:+1234567890" style={{
          display: "flex",
          alignItems: "center",
          color: "#2c3e50",
          textDecoration: "none",
          fontSize: "1.8vh"
        }}>
          📱 +91 8969030576
        </a>
      </div>
    </section>
  );
};

export default Contact;