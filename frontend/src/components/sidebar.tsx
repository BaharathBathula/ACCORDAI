import Link from "next/link";

export default function Sidebar() {
  const menuItems = [
    {
      label: "Dashboard",
      href: "/dashboard"
    },
    {
      label: "Customers",
      href: "/customers"
    },
    {
      label: "Policies",
      href: "/policies"
    },
    {
      label: "Claims",
      href: "/claims"
    },
    {
      label: "Tasks",
      href: "/tasks"
    },
    {
      label: "Documents",
      href: "/documents"
    },
    {
      label: "Analytics",
      href: "/analytics"
    },
    {
      label: "AI Copilot",
      href: "/copilot"
    }
  ];

  return (
    <aside className="w-64 min-h-screen bg-gray-950 border-r border-gray-800 p-6">
      <h1 className="text-3xl font-bold text-white mb-10">
        ACCORDAI
      </h1>

      <nav className="space-y-4">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="block text-gray-300 hover:text-white hover:bg-gray-800 transition-all p-3 rounded-xl"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
