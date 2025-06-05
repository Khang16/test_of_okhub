import investPageImage from "../common/images/invest.png";
import logo from "../common/images/logo.png";
import logoLight from "../common/images/logo-light.png";

import investImage from "../common/images/Switch.png";

const InvestPage: React.FC = () => {
  return (
    <div
      className="
        min-h-screen w-full h-screen 
        bg-cover bg-center overflow-hidden bg-no-repeat 
        relative -top-[300px] lg:-top-[250px] 
        z-10 bg-intro-desktop-invest"
      style={{ backgroundImage: `url(${investPageImage})` }}
    >
      <div className="invest-content text-center px-6">
        <h1 className="invest-label">• LĨNH VỰC ĐẦU TƯ</h1>
        <p>
          <div className="invest-title">
            Ami&M là đối tác tư vấn - đầu tư bền vững, phát triển dịch vụ cao
            cấp và nâng tầm giáo dục trải nghiệm.
          </div>
        </p>
        <p className="pt-3 font-bold">
          Với hệ sinh thái tối ưu, Ami&M truyền cảm hứng xây dựng sự thịnh vượng
          đích thực cho những Người đồng hành và tạo lập di sản xứng tầm cho thế
          hệ tương lai.
        </p>
      </div>

      <div className="mobile-only-cards">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="rounded-card">
            <img src={index === 0 ? logoLight : logo} alt="" />
          </div>
        ))}
        <div className="image-logo">
          <img src={investImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default InvestPage;
