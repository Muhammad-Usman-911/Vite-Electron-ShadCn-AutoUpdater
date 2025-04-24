
// src/components/readme/ConfigTab.tsx
import React from "react";

export default function ConfigTab() {
  const configs = [
    {
      title: "electron-builder.json",
      description: "This file contains the configuration for building and packaging your Electron application, including:",
      items: [
        "Application ID",
        "Output directory",
        "Build targets (Windows, macOS)",
        "NSIS installer options",
        "Auto-update configuration"
      ]
    },
    {
      title: "vite.config.ts",
      description: "This file configures the Vite build process for both the renderer and main processes.",
      items: []
    }
  ];

  return (
    <div className="space-y-4">
      <div className="rounded-lg border p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-4">🔧 Configuration</h2>
        
        {configs.map((config, index) => (
          <div key={index} className={index > 0 ? "mt-4" : ""}>
            <h3 className="text-xl font-bold">{config.title}</h3>
            <p>{config.description}</p>
            {config.items.length > 0 && (
              <ul className="list-disc pl-5 space-y-1">
                {config.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

