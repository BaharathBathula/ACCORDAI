interface DashboardCardProps {
  title: string;
  value: string;
  description: string;
}

export default function DashboardCard({
  title,
  value,
  description
}: DashboardCardProps) {
  return (
    <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
      <h3 className="text-gray-400 text-sm">
        {title}
      </h3>

      <p className="text-4xl font-bold text-white mt-4">
        {value}
      </p>

      <p className="text-gray-500 text-sm mt-3">
        {description}
      </p>
    </div>
  );
}
