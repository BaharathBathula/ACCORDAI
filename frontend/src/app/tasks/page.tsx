import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

const tasks = [
  {
    id: 1,
    title: "Review high-premium renewal accounts",
    priority: "High",
    assigned: "Producer Team",
    status: "Open",
    due: "May 10, 2026"
  },
  {
    id: 2,
    title: "Follow up on pending claims documentation",
    priority: "Medium",
    assigned: "Claims Department",
    status: "In Progress",
    due: "May 08, 2026"
  },
  {
    id: 3,
    title: "Offer roadside coverage to personal auto accounts",
    priority: "Low",
    assigned: "Customer Service",
    status: "Open",
    due: "May 15, 2026"
  }
];

export default function TasksPage() {
  return (
    <main className="flex min-h-screen bg-black">
      <Sidebar />

      <section className="flex-1">
        <Topbar />

        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white">
                Workflow Tasks
              </h1>

              <p className="text-gray-400 mt-2">
                Operational workflow and AI-generated agency tasks
              </p>
            </div>

            <button className="bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-xl text-white">
              Create Task
            </button>
          </div>

          <div className="grid grid-cols-4 gap-6 mb-10">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-400">Open Tasks</p>
              <h2 className="text-4xl font-bold text-white mt-3">
                214
              </h2>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-400">AI Generated</p>
              <h2 className="text-4xl font-bold text-white mt-3">
                126
              </h2>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-400">Overdue</p>
              <h2 className="text-4xl font-bold text-red-400 mt-3">
                18
              </h2>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-400">Completed</p>
              <h2 className="text-4xl font-bold text-green-400 mt-3">
                482
              </h2>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-950">
                <tr>
                  <th className="text-left text-gray-400 p-5">
                    Task
                  </th>

                  <th className="text-left text-gray-400 p-5">
                    Priority
                  </th>

                  <th className="text-left text-gray-400 p-5">
                    Assigned To
                  </th>

                  <th className="text-left text-gray-400 p-5">
                    Status
                  </th>

                  <th className="text-left text-gray-400 p-5">
                    Due Date
                  </th>
                </tr>
              </thead>

              <tbody>
                {tasks.map((task) => (
                  <tr
                    key={task.id}
                    className="border-t border-gray-800 hover:bg-gray-800 transition-all"
                  >
                    <td className="p-5 text-white">
                      {task.title}
                    </td>

                    <td className="p-5">
                      <span className="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">
                        {task.priority}
                      </span>
                    </td>

                    <td className="p-5 text-gray-300">
                      {task.assigned}
                    </td>

                    <td className="p-5 text-gray-300">
                      {task.status}
                    </td>

                    <td className="p-5 text-gray-300">
                      {task.due}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
