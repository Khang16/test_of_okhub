import { motion, useInView } from "framer-motion";
import friendsPageImage from "../common/images/friends.png";
import { useRef } from "react";

const FriendsPage: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const lines = [
    "'' Tình bằng hữu, sự chính trực và tinh thần tự",
    "nâng tầm hub đúc nên tinh thần của một tổ chức",
    "không ngừng học tập để kiến tạo giá trị ''"
  ];

  return (

    <div
      className="friends-page  relative -top-[300px] lg:-top-[310px]"
      style={{ backgroundImage: `url(${friendsPageImage})` }}
    >
      <div 
        ref={ref}
        className="friends-content"
      >
        <div className="friends-text text-white">
          {lines.map((line, lineIndex) => (
            <div key={lineIndex} className="mb-2 sm:mb-4">
              {line.split("").map((letter, letterIndex) => (
                <motion.span
                  key={`${lineIndex}-${letterIndex}`}
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={isInView ? { 
                    opacity: 1, 
                    filter: "blur(0px)" 
                  } : {}}
                  transition={{ 
                    duration: 0.5,
                    delay: (lineIndex * 0.5) + (letterIndex * 0.03),
                    ease: "easeOut" 
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendsPage;