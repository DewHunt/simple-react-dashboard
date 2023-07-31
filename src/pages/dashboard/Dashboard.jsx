import BarCharts from "../../components/dashboard/BarCharts";
import PieCharts from "../../components/dashboard/PieCharts";
import PopularProducts from "../../components/dashboard/PopularProducts";
import RecentOrders from "../../components/dashboard/RecentOrders";
import Summary from "../../components/dashboard/Summary";
import Layout from "../../components/shared/Layout";

const Dashboard = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col gap-4">
          <Summary />
          <div className="flex flex-row gap-4 w-full">
            <BarCharts />
            <PieCharts />
          </div>
          <div className="flex flex-row gap-4 w-full">
            <RecentOrders />
            <PopularProducts />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
