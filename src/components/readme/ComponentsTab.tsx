// src/components/readme/ComponentsTab.tsx
import React from "react";

export default function ComponentsTab() {
  const components = [
    {
      title: "Update Dialog",
      path: "src/components/update/UpdateDialog.tsx",
      features: [
        "Update availability",
        "Download progress",
        "Installation button",
        "Error messages"
      ]
    },
    {
      title: "Main Process Update Handler",
      path: "electron/main/update.ts",
      features: [
        "Checks for updates",
        "Downloads updates",
        "Installs updates",
        "Communicates with the renderer process"
      ]
    }
  ];

  return (
    <div className="space-y-4">
      <div className="rounded-lg border p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-4">🧩 Key Components</h2>
        
        {components.map((component, index) => (
          <div key={index} className={index > 0 ? "mt-4" : ""}>
            <h3 className="text-xl font-bold">{component.title}</h3>
            <p className="mb-2">
              The {component.title.toLowerCase()} (<code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">{component.path}</code>) provides a user interface for the auto-update process. It shows:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              {component.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
