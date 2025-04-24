// src/components/readme/TestingTab.tsx
import React from "react";

export default function TestingTab() {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border p-6">
        <h2 className="text-2xl font-bold mb-4">🧪 Testing</h2>
        <p className="mb-4">The project includes Playwright for end-to-end testing:</p>
        <div className="bg-black rounded-md p-4 text-gray-200 font-mono text-sm">
          <div>
            <span className="text-green-400"># Run tests</span>
            <br />
            npm run test
          </div>
        </div>
      </div>
    </div>
  );
}
