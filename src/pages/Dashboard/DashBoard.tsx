import DashBoardLayout from "../../Components/DashBoardLayout";
import PortfolioSection from "./Components/Portfolio";

function DashBoard() {
  return (
    <DashBoardLayout title="Dashboard">
      <PortfolioSection />
    </DashBoardLayout>
  );
}

export default DashBoard;
