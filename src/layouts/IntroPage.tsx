import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import vector from "../common/images/Vector211.png";
import vector1 from "../common/images/Vector210.png";
import { useEffect, useRef } from "react";

const IntroPage: React.FC = () => {
  const span1Ref = useRef<HTMLSpanElement>(null);
  const span2Ref = useRef<HTMLSpanElement>(null);
  const span3Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset1 = scrollY * 0.1;
      const offset2 = scrollY * 0.15;
      const offset3 = scrollY * 0.2;

      if (span1Ref.current)
        span1Ref.current.style.transform = `translateY(${offset1}px)`;
      if (span2Ref.current)
        span2Ref.current.style.transform = `translateY(${offset2}px)`;
      if (span3Ref.current)
        span3Ref.current.style.transform = `translateY(${offset3}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref4, inView4] = useInView({ threshold: 0.1, triggerOnce: true });
  const [refButton, inViewButton] = useInView({ threshold: 0.1, triggerOnce: true });

  const [refCircle1, inViewCircle1] = useInView({ threshold: 0.1, triggerOnce: true });
  const [refCircle2, inViewCircle2] = useInView({ threshold: 0.1, triggerOnce: true });
  const [refCircle3, inViewCircle3] = useInView({ threshold: 0.1, triggerOnce: true });

  const contentSections = [
    "CÔNG TY CỔ PHẦN TẬP ĐOÀN AMI&M VIỆT NAM",
    "KHỞI NGUỒN TỪ TÌNH BẰNG HỮU",
    `Bắt đầu từ năm 2005 – thời điểm những người bạn cùng chung chí
    hướng chia sẻ những ý tưởng đầu tiên về AMITICAS, cũng như nỗ lực
    không ngừng nghỉ để đến 9.9.2019, Ami&M chính thức đi vào hoạt động.`,
    `Tại Ami&M, chúng tôi được sống và làm việc hết mình! Được gắn bó
    và kết nối cùng những người bằng hữu mà chúng tôi gọi là ANH EM –
    AM, được bật phá các giới hạn bản thân để phát triển, thoả sức thử
    thách và gắn bó nhiệt thành để cùng nhau kiến tạo các giá trị mà
    mình tin tưởng.`
  ];

  return (
    <>
      <div className="container-intro relative w-full h-screen flex flex-col md:flex-row items-center bg-gradient-to-r from-[#6a7fd4] to-[#6ec6ca] overflow-hidden">
        <div className="absolute inset-0 bg-intro-desktop md:bg-intro-tablet lg:bg-intro-desktop"></div>

        <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center px-6 md:px-10 lg:px-16 z-10 content-repo">
          <div className="text-white">
            <motion.div
              ref={ref1}
              initial={{ opacity: 0, y: 20 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="name-company mb-4 md:text-xl lg:text-2xl font-semibold tracking-wider"
            >
              {contentSections[0]}
            </motion.div>

            <motion.h1
              ref={ref2}
              initial={{ opacity: 0, y: 20 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="title-intro text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              {contentSections[1].split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </motion.h1>

            <motion.p
              ref={ref3}
              initial={{ opacity: 0, y: 20 }}
              animate={inView3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-8 font-bold text-sm md:text-base lg:text-lg leading-relaxed"
            >
              {contentSections[2]}
            </motion.p>

            <motion.p
              ref={ref4}
              initial={{ opacity: 0, y: 20 }}
              animate={inView4 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-8 font-bold text-sm md:text-base lg:text-lg leading-relaxed"
            >
              {contentSections[3]}
            </motion.p>

            <motion.button
              ref={refButton}
              initial={{ opacity: 0, y: 20 }}
              animate={inViewButton ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-[#2d2e83] hover:bg-[#1a1b5a] text-white font-semibold py-2 px-6 rounded-full shadow-lg transition transform hover:scale-105 w-fit"
            >
              HÀNH TRÌNH CỦA AMI&M &rarr;
            </motion.button>
          </div>
        </div>

        <div className="hidden w-1/2 md:block">
          <motion.span 
            ref={refCircle1}
            className="absolute top-20 right-24 w-28 h-28 bg-red-500 rounded-full"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inViewCircle1 ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.span>
          
          <motion.span 
            ref={refCircle2}
            className="absolute bottom-24 right-36 w-20 h-20 bg-lime-400 rounded-full"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inViewCircle2 ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.span>
          
          <motion.span 
            ref={refCircle3}
            className="absolute top-1/2 left-1/2 w-12 h-12 border-2 border-white rounded-full ml-36"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inViewCircle3 ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          ></motion.span>
        </div>
      </div>

      <img
        src={vector}
        alt=""
        className="hidden-image relative w-full h-24 md:h-36 -top-24 z-0"
      />
      <img
        src={vector1}
        alt=""
        className="hidden-image relative w-full h-24 md:h-36 -top-[15.4rem]  z-10"
      />
    </>
  );
};

export default IntroPage;
