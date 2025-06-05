import earthPageImage from "../common/images/earth.png";

const VisionPage: React.FC = () => {
  return (
    <div
      className="
    min-h-screen w-full h-screen 
    bg-cover bg-center overflow-hidden bg-no-repeat 
    relative  -top-[150px]  lg:-top-[350px] 
    z-10"
      style={{ backgroundImage: `url(${earthPageImage})` }}
    >
      <div className="vision-container">
        <div className="vision-content text-center px-6">
          <h1 className="vision-label">• TẦM NHÌN •</h1>
          <p>
            <span className="gradient-purple">
              Ami&M hệ sinh thái đa ngành phát
            </span>{" "}
            <span className="gradient-blue">triển nhanh và bền vững</span>{" "}
            <span className="text-dark">
              trên hành trình kiến tạo sự thịnh vượng đích thực!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionPage;
