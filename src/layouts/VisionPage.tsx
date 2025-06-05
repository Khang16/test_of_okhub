import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import earthPageImage from "../common/images/earth.png";

const VisionPage: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const text = [
    { content: "Ami&M hệ sinh thái đa ngành phát", className: "gradient-purple" },
    { content: " triển nhanh và bền vững", className: "gradient-blue" },
    { content: " trên hành trình kiến tạo sự thịnh vượng đích thực!", className: "text-dark" }
  ];

  return (
    <div
      ref={ref}
      className="min-h-screen w-full h-screen bg-cover bg-center overflow-hidden bg-no-repeat relative -top-[150px] lg:-top-[350px] z-10"
      style={{ backgroundImage: `url(${earthPageImage})` }}
    >
      <div className="vision-container">
        <div className="vision-content text-center px-6">
          <h1 className="vision-label">• TẦM NHÌN •</h1>
          <p>
            {text.map((section, sectionIndex) => (
              <motion.span
                key={`section-${sectionIndex}`}
                className={section.className}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  delay: sectionIndex * 0.5, 
                  duration: 0.5 
                }}
              >
                {section.content}
              </motion.span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionPage;