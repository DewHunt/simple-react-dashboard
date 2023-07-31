import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const PieCharts = () => {
  const RADIAN = Math.PI / 180;
  const COLORS = ["#00C49F", "#FFBB28", "#FF8042"];
  const data = [
    { name: "Male", value: 540 },
    { name: "Female", value: 620 },
    { name: "Other", value: 210 },
  ];

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <div className="flex flex-col w-[25.2rem] h-[22rem] bg-white p-4 rounded border border-gray-200">
        <strong className="text-gray-700 font-medium">Customer Profile</strong>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={500} height={500}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={105}
              fill="#8884d8"
              dataKey="value">
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default PieCharts;
