
// src/components/readme/AutoUpdateTab.tsx
import React from "react";

export default function AutoUpdateTab() {
  const publishConfig = `"publish": {
  "provider": "github",
  "owner": "YOUR_GITHUB_USERNAME",
  "repo": "YOUR_REPOSITORY_NAME",
  "releaseType": "release"
}`;

  return (
    <div className="space-y-4">
      <div className="rounded-lg border p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-2">🔄 Auto-Update System</h2>
        <p>
          This template includes a complete auto-update system that allows your application to check for, download, and install updates automatically. The system uses GitHub releases as the update source.
        </p>
        
        <h3 className="text-xl font-bold mt-4">How Auto-Update Works</h3>
        <ol className="list-decimal pl-5 space-y-1">
          <li>The application checks for updates using the <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">electron-updater</code> package</li>
          <li>If an update is available, users are notified with an update dialog</li>
          <li>Users can choose to download and install the update</li>
          <li>The application will restart automatically after the update is installed</li>
        </ol>
        
        <h3 className="text-xl font-bold mt-4">Update Dialog</h3>
        <p>The update dialog provides a user-friendly interface for the update process:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Shows the current and new version numbers</li>
          <li>Displays download progress with a progress bar</li>
          <li>Provides clear error messages if something goes wrong</li>
          <li>Allows users to install the update with a single click</li>
        </ul>
        
        <h3 className="text-xl font-bold mt-4">Setting Up Auto-Update for Your Repository</h3>
        <p>To configure the auto-update system for your own repository, modify the <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">publish</code> section in the <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">electron-builder.json</code> file:</p>
        <div className="bg-black rounded-md p-4 text-gray-200 font-mono text-sm mt-2">
          <pre>{publishConfig}</pre>
        </div>
        
        <p className="mt-2">Replace:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">YOUR_GITHUB_USERNAME</code> with your GitHub username</li>
          <li><code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">YOUR_REPOSITORY_NAME</code> with your repository name</li>
        </ul>
        
        <h3 className="text-xl font-bold mt-4">Creating GitHub Releases</h3>
        <p>To publish updates:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Increment the version number in <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">package.json</code></li>
          <li>Build your application with <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">npm run build</code></li>
          <li>Create a new release on GitHub</li>
          <li>Upload the generated installer files from the <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">release/{"{version}"}</code> directory</li>
          <li>Publish the release</li>
        </ol>
        <p>Your users will then be able to download and install the update automatically.</p>
      </div>
    </div>
  );
}

