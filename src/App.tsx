import CooperatePage from "./layouts/Cooperatepage";
import FriendsPage from "./layouts/FriendsPage";
import HomePage from "./layouts/HomePage";
import IntroPage from "./layouts/IntroPage";
import InvestPage from "./layouts/InvestPage";
import MissionPage from "./layouts/MissionPage";
import AmiMLayout from "./layouts/StepPage";
import VisionPage from "./layouts/VisionPage";

function App() {
  return (
    <>
      <HomePage></HomePage>
      <IntroPage></IntroPage>
      <VisionPage></VisionPage>
      <MissionPage></MissionPage>
      <InvestPage></InvestPage>
      <AmiMLayout></AmiMLayout>
      <FriendsPage></FriendsPage>
      <CooperatePage></CooperatePage>
    </>
  );
}

export default App;
