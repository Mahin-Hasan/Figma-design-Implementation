import DashBoardInfo from "./DashBoardInfo";
import DashboardOptions from "./DashboardOptions";

const Dashboard = () => {
  return (
    <section className="p-5 bg-white pt-28">
      <div className="flex flex-col sm:flex-row">
        {/* Dashboard option */}
        <DashboardOptions />
        {/* Dashboard chart */}
        <DashBoardInfo />
      </div>
    </section>
  );
};

export default Dashboard;
