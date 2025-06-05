import React, { useRef, useEffect } from "react";
import buildingImage from "../common/images/building.png";
import plantImage from "../common/images/plant.png";
import handImage from "../common/images/hand.png";
import flowerImage from "../common/images/flower.png";
import documnetImage from "../common/images/document.png";

const AmiMLayout = () => {
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleLeftPanelScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!isMobile && rightPanelRef.current) {
      rightPanelRef.current.scrollTop += e.deltaY;
    }
  };

  const handleRightPanelWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (isMobile) return;
    
    const panel = rightPanelRef.current;
    if (!panel) return;

    const isScrollingDown = e.deltaY > 0;
    const isAtTop = panel.scrollTop === 0;
    const isAtBottom = Math.ceil(panel.scrollTop + panel.clientHeight) >= panel.scrollHeight;

    if ((isScrollingDown && !isAtBottom) || (!isScrollingDown && !isAtTop)) {
      e.preventDefault();
      panel.scrollTop += e.deltaY;
    }
  };

  return (
    <div className="flex h-screen bg-white relative -top-[450px] lg:-top-[150px] pl-3.5 container-step">
      <div
        className="w-1/2 p-12 flex flex-col justify-between bg-white  border-gray-200 sticky top-0 h-screen container-step"
        onWheel={isMobile ? undefined : handleLeftPanelScroll}
      >
        <div className="flex items-center">
          <div>
            <div className="mission-label">• TỪNG BƯỚC PHÁT TRIỂN</div>

            <div
              className="text-4xl font-bold mt-5 mb-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-rose-500 context-h2"
              style={{ fontSize: "5rem", width: "100%", paddingTop: "20px", paddingBottom: '20px' }}
            >
              Dấu ấn Ami&M
            </div>

            <p className="text-lg font-bold text-gray-500 mb-12 " style={{fontSize:'16px'}}>
              Những con số chì là một phần của câu chuyện, ý nghĩa thực sự là
              những dấu ổn sâu dặm về sự đối mới, trách nhiệm xã hội và sự tin
              cậy từ những Người đồng hành.
            </p>
          </div>
        </div>
      </div>

      <div
        ref={rightPanelRef}
        className={`w-1/2 ${isMobile ? 'overflow-y-visible' : 'overflow-y-auto scrollbar-hide'} container-step-content`}
        onWheel={isMobile ? undefined : handleRightPanelWheel}
      >
        <div className="mt-auto">
          <div className="flex items-center space-x-4  stats-container">
            <div
              className="flex items-center gap-8 small-content"
              style={{ height: "12rem", margin: "2rem" }}
            >
              <div className="block">
                <img src={handImage} alt="" />
              </div>
              <div style={{width: '60%'}}>
                <p className=" font-bold text-gray-800 title-step">686 tỷ</p>
                <p className="text-sm text-gray-500 title-small">
                  Tổng tài sản và Vốn chủ sở hữu
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4  stats-container">
            <div
              className="flex items-center gap-8 small-content"
              style={{ height: "12rem", margin: "2rem" }}
            >
              <div className="block">
                <img src={plantImage} alt="" />
              </div>
              <div style={{width: '60%'}}>
                <p className=" font-bold text-gray-800 title-step">93,9 tỷ</p>
                <p className="text-sm text-gray-500 title-small">Doanh thu thuần</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4  stats-container">
            <div
              className="flex items-center gap-8 small-content"
              style={{ height: "12rem", margin: "2rem" }}
            >
              <div className="block">
                <img src={flowerImage} alt="" />
              </div>
              <div style={{width: '60%'}}>
                <p className=" font-bold text-gray-800 title-step">24,6 tỷ</p>
                <p className="text-sm text-gray-500 title-small">Lợi nhuận gộp</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4  stats-container">
            <div
              className="flex items-center gap-8 small-content"
              style={{ height: "12rem", margin: "2rem" }}
            >
              <div className="block">
                <img src={buildingImage} alt="" />
              </div>
              <div style={{width: '60%'}}>
                <p className=" font-bold text-gray-800 title-step">20+</p>

                <p className="text-sm text-gray-500 title-small">Dự án trọng điểm</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4 stats-container">
            <div
              className="flex items-center gap-8 small-content"
              style={{ height: "12rem", margin: "2rem" }}
            >
              <div className="block">
                <img src={documnetImage} alt="" />
              </div>
              <div className="title-3">
                <p className=" font-bold text-gray-800 title-step">03 văn phòng</p>

                <p className="text-sm text-gray-500 title-small">Trên các tính thành</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmiMLayout;
