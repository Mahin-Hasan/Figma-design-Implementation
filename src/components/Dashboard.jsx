import DashBoardInfo from "./DashBoardInfo";
import DashboardOptions from "./DashboardOptions";

const Dashboard = () => {
  return (
    <section className="p-5 bg-white pt-12 md:pt-28">
      <div className="flex flex-col md:flex-row">
        {/* Dashboard option */}
        <DashboardOptions />
        {/* Dashboard chart */}
        <DashBoardInfo />
      </div>
    </section>
  );
};

export default Dashboard;
