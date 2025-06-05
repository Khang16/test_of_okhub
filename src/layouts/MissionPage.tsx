import nhanvienIcon from "../common/images/Component1.png";
import khachhangIcon from "../common/images/Component2.svg";
import doitacIcon from "../common/images/Component3.svg";
import congdongIcon from "../common/images/Component4.png";
import missionImage from "../common/images/div.f-img.png";

const missionList = [
  {
    icon: nhanvienIcon,
    title: "VỚI CÁN BỘ NHÂN VIÊN",
    desc: "Cảm thấy gắn kết, được trân trọng, được tạo cơ hội để khai phá, phát triển, khẳng định giá trị bản thân",
  },
  {
    icon: khachhangIcon,
    title: "VỚI KHÁCH HÀNG",
    desc: "Cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang đến cho khách hàng những trải nghiệm tốt nhất",
  },
  {
    icon: doitacIcon,
    title: "VỚI ĐỐI TÁC",
    desc: "Tin tưởng và muốn hợp tác dài lâu trên nền tảng của sự phát triển bền vững và hướng tới những giá trị tốt đẹp",
  },
  {
    icon: congdongIcon,
    title: "VỚI CỘNG ĐỒNG",
    desc: "Hài hòa lợi ích doanh nghiệp với lợi ích xã hội, đóng góp tích cực cho các hoạt động hướng về cộng đồng",
  },
];

const MissionPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center  relative overflow-hidden w-full pl-12 pr-12 -top-[370px] container-mission">
      <div className="relative w-full flex flex-col items-center mb-12">
        <div className="mission-bg"></div>
        <div className="mission-header">
          <div className="mission-label">• SỨ MỆNH •</div>
          <div className="mission-title">
            Mang lại cuộc sống tốt đẹp hơn
            <br />
            cho những người đồng hành
          </div>
        </div>
      </div>

      <div className="flex w-full justify-around items-start pt-10 content-custom">
        <div className="text-xs text-[#B0B0B0] pt-12 date order-1 md:order-1">
          04/04
        </div>
        <div className="flex order-3 md:order-2">
          <div className="mission-list-container custom-scrollbar ">
            {missionList.map((item, idx) => (
              <div key={idx} className="mission-list-item">
                <div className="mission-list-content">
                  <img src={item.icon} alt="" className="mission-list-icon" />
                  <div className="mission-list-title">{item.title}</div>
                  <div className="mission-list-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center order-2 md:order-3  ">
          <img
            src={missionImage}
            alt="mission"
            className=" custom-image rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div>

      <div className="absolute left-0 top-0 w-full h-full pointer-events-none"></div>
    </div>
  );
};

export default MissionPage;
