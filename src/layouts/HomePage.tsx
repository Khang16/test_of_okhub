import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import homePageImage from "../common/images/homePage.png";

const HomePage: React.FC = () => {
  const text = "ĐỒNG HÀNH KHỞI THỊNH VƯỢNG";
  const containerRef = useRef(null);

  const { scrollY } = useScroll();
  const height = useTransform(scrollY, [0, 300], ["100vh", "50vh"]);

  return (
    <motion.div
      ref={containerRef}
      className="w-full bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${homePageImage})`,
        height: height,
      }}
    >
      <div className="homepage-content text-center px-6 pt-32">
        <h1 className="homepage-label text-white text-4xl font-bold">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {char}
            </motion.span>
          ))}
        </h1>
      </div>
    </motion.div>
  );
};

export default HomePage;
