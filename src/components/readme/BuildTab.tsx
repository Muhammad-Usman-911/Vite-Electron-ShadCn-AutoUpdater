// src/components/readme/BuildTab.tsx
import React from "react";

export default function BuildTab() {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border p-6">
        <h2 className="text-2xl font-bold mb-4">🛠️ Build</h2>
        <div className="bg-black rounded-md p-4 text-gray-200 font-mono text-sm mb-4">
          <div>
            <span className="text-green-400"># Build the application</span>
            <br />
            npm run build
          </div>
        </div>
        <p>This will create a packaged application in the <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">release/{"{version}"}</code> directory.</p>
      </div>
    </div>
  );
}
