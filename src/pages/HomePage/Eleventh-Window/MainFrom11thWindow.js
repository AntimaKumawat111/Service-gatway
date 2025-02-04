import React, { useEffect, useState } from "react";
import FAQ from "./Faq";
import TopBar from "./TopBar";
import { motion, useAnimation } from "framer-motion";

function MainFrom11thWindow() {
  const [inViewport, setInViewport] = useState(false);
  const controls = useAnimation(); // Animation control for both elements

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInViewport(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("mainFrom11thWindow");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    controls.start({
      opacity: inViewport ? 1 : 0,
      y: inViewport ? 0 : -100,
      transition: { duration: 0.5 },
    });
  }, [inViewport, controls]);

  return (
    <div id="mainFrom11thWindow" className="relative p-4">
      {/* TopBar Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={controls}
        className="relative mb-4" // margin-bottom added to prevent overlap
      >
        <TopBar />
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, translateY: 100 }}
        animate={{ opacity: inViewport ? 1 : 0, translateY: inViewport ? 0 : 50 }}
        transition={{ duration: 1 }}
      >
        <FAQ />
      </motion.div>
    </div>
  );
}

export default MainFrom11thWindow;
