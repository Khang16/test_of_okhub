import React, { useState } from "react";
import avatar1 from "../common/images/avatar1.png";
import avatar4 from "../common/images/avatar1.1.png";
import avatar2 from "../common/images/avatar2.png";
import avatar3 from "../common/images/avatar3.png";
import video from "../common/video/119.mp4";
import daiNam from "../common/images/daiNam.png";
import haiQuan from "../common/images/haiQuan.png";
import netZand from "../common/images/netzand.png";
import times from "../common/images/timesgarden.png";
import nhatMinh from "../common/images/nhatminh.png";

const avatars = [
  {
    id: 1,
    name: "TS. Đinh Thanh Văn",
    position: "Phó trưởng Khoa Ngân hàng - Tài chính, ĐH Kinh tế, ĐHQG Hà Nội",
    avatar: avatar1,
    main: avatar4,
  },
  {
    id: 2,
    name: "TS. Nguyễn Văn B",
    position: "Giảng viên cao cấp, Học viện Tài chính",
    avatar: avatar2,
    main: avatar2,
    video: video,
  },
  {
    id: 3,
    name: "TS. Trần Thị C",
    position: "Chuyên gia Tài chính, Ngân hàng Vietcombank",
    avatar: avatar3,
    main: avatar3,
  },
];

const CooperatePage: React.FC = () => {
  const [selected, setSelected] = useState(avatars[0]);

  return (
    <div
      className="bg-gradient-to-r from-[#102A4D] to-[#01284E] text-white relative -top-[405px] xs:-top-[450px] lg:-top-[310px] cooperate-page"
      style={{
        paddingLeft: "10rem",
        paddingTop: "3rem",
        paddingRight: "10rem",
      }}
    >
      <div className="cooperate-content mx-auto flex justify-center gap-8">
        <div
          className="cooperate-left flex-1"
          style={{ flex: "2", width: "70%" }}
        >
          <p className="text-sm text-[#C2B5EC] font-semibold">
            • Hợp tác vững bền
          </p>
          <p className="mt-4 text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed">
            Chúng tôi thực sự hắng khởi khi đồng hành cùng Ami&M bởi ở đây có
            một đội ngũ nhân sự không chỉ giàu kinh nghiệm trong lĩnh vực ngân
            hàng - tài chính mà quan trọng hơn đầy nhiệt tâm với mong muốn đóng
            góp vào sự phát triển chung của quá trình giáo dục định hướng thế hệ
            trẻ.
          </p>
          <div className="mt-8">
            <p className="font-bold text-xl md:text-2xl">{selected.name}</p>
            <p className="text-sm md:text-base text-[#C2B5EC] mt-1">
              {selected.position}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-6 avatars">
            {avatars.map((a) => (
              <img
                key={a.id}
                src={a.avatar}
                onClick={() => setSelected(a)}
                className={`cooperate-avatar w-20 h-20 md:w-20 md:h-20 ${
                  selected.id === a.id
                    ? "border-white scale-110"
                    : "border-transparent hover:scale-105"
                }`}
                alt={a.name}
              />
            ))}
          </div>
        </div>

        <div
          className="cooperate-right flex-1"
          style={{ flex: "1", width: "20%" }}
        >
          <div className="flex justify-center items-center mt-6 md:mt-0 h-[30rem] w-[33rem]">
            {selected.id === 2 ? (
              <div className="w-full max-w-md rounded-full overflow-hidden shadow-lg bg-black bg-opacity-20 aspect-square">
                <video
                  src={selected.video}
                  autoPlay
                  loop
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div
                className="cooperate-main-image w-full max-w-md rounded-lg overflow-hidden shadow-lg"
                style={{ height: "44rem" }}
              >
                <img
                  src={selected.main}
                  alt="Selected Speaker"
                  style={{ height: "45rem", width: "50rem" }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className="text-white bg-white"
        style={{
          marginTop: "2rem",
          width: "max-content",
          padding: "0.5rem 1.5rem",
          borderTopLeftRadius: "2rem",
          borderTopRightRadius: "2rem",
        }}
      >
        <p className="text-sm md:text-base text-[#C2B5EC] font-semibold">
          • Đối tác tiêu biểu
        </p>
        <h3 className="text-xl md:text-2xl font-semibold mt-2">
          <span className="text-[#FB2E86]">ĐỒNG HÀNH CÙNG AMI&M</span>
        </h3>
      </div>

      <div
        className="cooperate-partners flex items-center justify-center bg-white"
        style={{
          marginLeft: "-160px",
          marginRight: "-160px",
          padding: "1rem 0",
        }}
      >
        <img
          src={netZand}
          alt="Times Garden"
          className="partner-logo mx-auto h-20 object-contain"
        />
        <img
          src={daiNam}
          alt="NetZLand"
          className="partner-logo mx-auto h-20 object-contain"
        />
        <img
          src={nhatMinh}
          alt="Đại Nam"
          className="partner-logo mx-auto h-20 object-contain"
        />
        <img
          src={haiQuan}
          alt="Nhật Minh"
          className="partner-logo mx-auto h-20 object-contain"
        />
        <img
          src={times}
          alt="Hải Quân"
          className="partner-logo mx-auto h-20 object-contain"
        />
        <img
          src={daiNam}
          alt="Hải Quân"
          className="partner-logo mx-auto h-20 object-contain"
        />
        <img
          src={nhatMinh}
          alt="Hải Quân"
          className="partner-logo mx-auto h-20 object-contain"
        />
        <img
          src={times}
          alt="Hải Quân"
          className="partner-logo mx-auto h-20 object-contain"
        />
      </div>
    </div>
  );
};

export default CooperatePage;
