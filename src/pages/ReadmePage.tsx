"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Download,
  Terminal,
  FolderTree,
  Settings,
  RefreshCw,
  Code,
  FileCode,
  FileStack,
  Award,
  Lightbulb,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltips"

// Components
import FeaturesTab from "../components/readme/FeaturesTab"
import BuildTab from "../components/readme/BuildTab"
import AutoUpdateTab from "../components/readme/AutoUpdateTab"
import ComponentsTab from "../components/readme/ComponentsTab"
import ConfigTab from "../components/readme/ConfigTab"
import TestingTab from "../components/readme/TestingTab"
import LicenseTab from "../components/readme/LicenseTab"

export default function ReadmePage() {
  const [activeTab, setActiveTab] = useState("overview")

  const tabs = [
    {
      id: "features",
      icon: <Award className="w-4 h-4" />,
      label: "Features",
      tooltip: "Key features and technologies",
    },
    {
      id: "build",
      icon: <Download className="w-4 h-4" />,
      label: "Build",
      tooltip: "Building and packaging the application",
    },
    {
      id: "autoupdate",
      icon: <RefreshCw className="w-4 h-4" />,
      label: "Auto-Update",
      tooltip: "Automatic update system via GitHub releases",
    },
    {
      id: "components",
      icon: <Code className="w-4 h-4" />,
      label: "Components",
      tooltip: "Key components and their functions",
    },
    {
      id: "config",
      icon: <Settings className="w-4 h-4" />,
      label: "Config",
      tooltip: "Application configuration files",
    },
    {
      id: "testing",
      icon: <FileStack className="w-4 h-4" />,
      label: "Testing",
      tooltip: "Testing tools and commands",
    },
    {
      id: "license",
      icon: <FileCode className="w-4 h-4" />,
      label: "License",
      tooltip: "License and acknowledgements",
    },
  ]

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-3xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-purple-700 dark:from-violet-400 dark:to-purple-400">
            Vite-Electron-ShadCn-AutoUpdater
          </h1>
          <div className="flex flex-wrap gap-2 justify-start">
            <Badge className="bg-violet-600 hover:bg-violet-700">Electron ⚛️</Badge>
            <Badge className="bg-purple-600 hover:bg-purple-700">Vite ⚡ </Badge>
            <Badge className="bg-fuchsia-600 hover:bg-fuchsia-700">React ®️ </Badge>
            <Badge className="bg-slate-800 hover:bg-slate-900 dark:bg-slate-500 dark:hover:bg-slate-600">
              ShadCn/UI Latest
            </Badge>
          </div>
        </div>
        <p className="text-lg text-muted-foreground text-left">
          A modern Electron application template built with Vite, React, TypeScript, and ShadCn/UI components, featuring
          an integrated auto-update system.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
        <div className="overflow-x-hidden pb-2">
          <TabsList className="d-flex flex-row gap-2 flex-1 flex-shrink flex-wrap h-auto">
            <TooltipProvider>
              {tabs.map((tab) => (
                <Tooltip key={tab.id}>
                  <TooltipTrigger asChild>
                    <TabsTrigger
                      value={tab.id}
                      className={`flex gap-2 items-center ${activeTab === tab.id ? "bg-violet-600 text-white hover:bg-violet-700 hover:text-white" : "hover:bg-violet-100 hover:text-violet-700 dark:hover:bg-violet-900 dark:hover:text-violet-300"}`}
                    >
                      {tab.icon}
                      <span className="hidden md:inline">{tab.label}</span>
                    </TabsTrigger>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>{tab.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </TabsList>
        </div>

        <div className="overflow-hidden mt-2">
          <TabsContent value="features">
            <FeaturesTab />
          </TabsContent>
          <TabsContent value="build">
            <BuildTab />
          </TabsContent>
          <TabsContent value="autoupdate">
            <AutoUpdateTab />
          </TabsContent>
          <TabsContent value="components">
            <ComponentsTab />
          </TabsContent>
          <TabsContent value="config">
            <ConfigTab />
          </TabsContent>
          <TabsContent value="testing">
            <TestingTab />
          </TabsContent>
          <TabsContent value="license">
            <LicenseTab />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
