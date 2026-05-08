"use client";

import { useEffect, useState } from "react";

export default function WorkflowWidget() {

  const [workflows, setWorkflows] =
    useState<any[]>([]);

  useEffect(() => {

    async function loadWorkflows() {

      try {

        const response =
          await fetch(
            "http://localhost:8000/workflows"
          );

        const data =
          await response.json();

        setWorkflows(data);

      } catch (error) {

        console.error(error);
      }
    }

    loadWorkflows();

  }, []);

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">

      <h2 className="text-2xl font-semibold text-white mb-6">
        Autonomous Workflows
      </h2>

      <div className="space-y-4">

        {workflows.length === 0 && (

          <div className="text-gray-400">
            No workflows running
          </div>
        )}

        {workflows.map((workflow) => (

          <div
            key={workflow.workflow_id}
            className="border border-gray-800 rounded-xl p-4"
          >

            <div className="flex justify-between">

              <span className="text-white font-medium">
                {workflow.workflow_type}
              </span>

              <span className="text-green-400">
                {workflow.status}
              </span>

            </div>

            <div className="text-gray-400 text-sm mt-2">
              {workflow.created_at}
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}
