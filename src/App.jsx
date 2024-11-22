import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import HeroSection from './components/HeroSection';

const fadeInUp = {
  hidden: { opacity: 0, y: 90 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.4 } },
};

const AnimatedSection = ({ children }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  );
};

const App = () => {
  return (
    <Router>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "#1a202c", // Dark background
          color: "#ffffff", // White text
        }}
      >
        <AnimatedSection>
        </AnimatedSection>
        <motion.a
          href="https://sceic-new-address.vercel.app"
          style={{
            backgroundColor: "#fbbf24", // Yellow background
            color: "#000000", // Black text
            fontSize: "1rem",
            fontWeight: "bold",
            padding: "0.75rem 1.5rem",
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.2s, background-color 0.3s",
          }}
          whileHover={{
            scale: 1.1,
            backgroundColor: "#f59e0b", // Darker yellow on hover
          }}
          whileTap={{ scale: 0.95 }}
        >
          GO TO OFFICIAL WEBSITE
        </motion.a>
      </div>
    </Router>
  );
};

export default App;
