import { motion } from "framer-motion";
import homePageImage from "../common/images/homePage.png";

const HomePage: React.FC = () => {
  const text = "ĐỒNG HÀNH KHỞI THỊNH VƯỢNG";

  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${homePageImage})` }}
    >
      <div className="homepage-content text-center px-6">
        <h1 className="homepage-label">
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
    </div>
  );
};

export default HomePage;
