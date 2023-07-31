import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const BarCharts = () => {
  const data = [
    {
      name: "Jan",
      expense: 4000,
      income: 2400,
    },
    {
      name: "Feb",
      expense: 3000,
      income: 1398,
    },
    {
      name: "Mar",
      expense: 2000,
      income: 9800,
    },
    {
      name: "Apr",
      expense: 2780,
      income: 3908,
    },
    {
      name: "May",
      expense: 1890,
      income: 4800,
    },
    {
      name: "Jun",
      expense: 2390,
      income: 3800,
    },
    {
      name: "July",
      expense: 3490,
      income: 4300,
    },
    {
      name: "Aug",
      expense: 2000,
      income: 9800,
    },
    {
      name: "Sep",
      expense: 2780,
      income: 3908,
    },
    {
      name: "Oct",
      expense: 1890,
      income: 4800,
    },
    {
      name: "Nov",
      expense: 2390,
      income: 3800,
    },
    {
      name: "Dec",
      expense: 3490,
      income: 4300,
    },
  ];

  return (
    <>
      <div className="flex flex-col flex-1 h-[22rem] bg-white p-4 rounded border border-gray-200">
        <strong className="text-gray-700 font-medium">Transaction</strong>
        <div className="flex-1 mt-3 w-full text-xs">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{ top: 20, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="income" fill="#0ea5e9" />
              <Bar dataKey="expense" fill="#ea580c" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default BarCharts;