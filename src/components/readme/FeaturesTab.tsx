// src/components/readme/FeaturesTab.jsx
import React from "react";

export default function FeaturesTab() {
  const features = [
    { emoji: "🔋", color: "text-blue-500", title: "Electron", description: "Cross-platform desktop application framework" },
    { emoji: "⚡️", color: "text-purple-500", title: "Vite", description: "Next generation frontend tooling" },
    { emoji: "⚛️", color: "text-blue-500", title: "React", description: "JavaScript library for building user interfaces" },
    { emoji: "🎨", color: "", title: "ShadCn/UI", description: "Beautiful, accessible UI components" },
    { emoji: "🔄", color: "", title: "Auto-Update", description: "Seamless application updates via GitHub releases" },
    { emoji: "🌙", color: "", title: "Dark Mode", description: "Built-in dark mode support" },
    { emoji: "📦", color: "", title: "TypeScript", description: "Type safety for your application" },
    { emoji: "🧩", color: "", title: "Component-based", description: "Modular architecture for easy maintenance" }
  ];

  return (
    <div className="space-y-4">
      <div className="rounded-lg border p-6">
        <h2 className="text-2xl font-bold mb-4">✨ Features</h2>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className={`mt-1 ${feature.color}`}>{feature.emoji}</div>
              <div>
                <span className="font-medium">{feature.title}</span> - {feature.description}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}