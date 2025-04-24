
// src/components/readme/LicenseTab.tsx
import React from "react";

export default function LicenseTab() {
  const acknowledgements = [
    { name: "Electron", url: "https://www.electronjs.org/" },
    { name: "Vite", url: "https://vitejs.dev/" },
    { name: "React", url: "https://reactjs.org/" },
    { name: "ShadCn/UI", url: "https://ui.shadcn.com/" },
    { name: "electron-updater", url: "https://www.npmjs.com/package/electron-updater" }
  ];

  return (
    <div className="space-y-4">
      <div className="rounded-lg border p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-2">📝 License</h2>
        <p>This project is licensed under the MIT License - see the LICENSE file for details.</p>
        
        <h2 className="text-2xl font-bold mt-4">🙏 Acknowledgements</h2>
        <ul className="list-disc pl-5 space-y-1">
          {acknowledgements.map((item, index) => (
            <li key={index}>
              <a href={item.url} className="text-blue-500 hover:underline">{item.name}</a>
            </li>
          ))}
        </ul>
        
        <div className="mt-6 pt-6 border-t">
          <p>Created by <a href="https://github.com/Muhammad-Usman-911" className="text-blue-500 hover:underline">Muhammad Usman</a></p>
        </div>
      </div>
    </div>
  );
}