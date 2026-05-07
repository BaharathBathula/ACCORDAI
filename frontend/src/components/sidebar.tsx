export default function Sidebar() {
  const menuItems = [
    "Dashboard",
    "Customers",
    "Policies",
    "Claims",
    "Tasks",
    "Documents",
    "Analytics",
    "AI Copilot"
  ];

  return (
    <aside className="w-64 min-h-screen bg-gray-950 border-r border-gray-800 p-6">
      <h1 className="text-3xl font-bold text-white mb-10">
        ACCORDAI
      </h1>

      <nav className="space-y-4">
        {menuItems.map((item) => (
          <div
            key={item}
            className="text-gray-300 hover:text-white hover:bg-gray-800 transition-all p-3 rounded-xl cursor-pointer"
          >
            {item}
          </div>
        ))}
      </nav>
    </aside>
  );
}
