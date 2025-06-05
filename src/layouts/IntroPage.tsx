import vector from "../common/images/Vector211.png";
import vector1 from "../common/images/Vector210.png";

const IntroPage: React.FC = () => {
  return (
    <>
      <div className="container-intro relative w-full h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-[#6a7fd4] to-[#6ec6ca] overflow-hidden">
        <div className="absolute inset-0 bg-intro-desktop md:bg-intro-tablet lg:bg-intro-desktop"></div>

        <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center px-6 md:px-10 lg:px-16 z-10 content-repo">
          <div className="text-white">
            <div className="name-company mb-4 md:text-xl lg:text-2xl font-semibold tracking-wider">
              CÔNG TY CỔ PHẦN TẬP ĐOÀN AMI&M VIỆT NAM
            </div>
            <h1 className="title-intro text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ">
              KHỞI NGUỒN TỪ
              <br />
              TÌNH BẰNG HỮU
            </h1>
            <p className="mb-8 font-bold text-sm md:text-base lg:text-lg  leading-relaxed">
              Bắt đầu từ năm 2005 – thời điểm những người bạn cùng chung chí
              hướng chia sẻ những ý tưởng đầu tiên về AMITICAS, cũng như nỗ lực
              không ngừng nghỉ để đến 9.9.2019, Ami&M chính thức đi vào hoạt
              động.
              <br />
              <br />
              Tại Ami&M, chúng tôi được sống và làm việc hết mình! Được gắn bó
              và kết nối cùng những người bằng hữu mà chúng tôi gọi là ANH EM –
              AM, được bật phá các giới hạn bản thân để phát triển, thoả sức thử
              thách và gắn bó nhiệt thành để cùng nhau kiến tạo các giá trị mà
              mình tin tưởng.
            </p>
            <button className="bg-[#2d2e83] hover:bg-[#1a1b5a] text-white font-semibold py-2 px-6 rounded-full shadow-lg transition transform hover:scale-105 w-fit">
              HÀNH TRÌNH CỦA AMI&M &rarr;
            </button>
          </div>
        </div>

        <div className="hidden w-1/2 md:block ">
          <span className="absolute top-24 right-24 w-28 h-28 bg-red-500 rounded-full "></span>
          <span className="absolute bottom-20 right-36 w-20 h-20 bg-lime-400 rounded-full "></span>
          <span className="absolute top-1/2 left-1/2 w-12 h-12 border-2 border-white rounded-full ml-36"></span>
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
