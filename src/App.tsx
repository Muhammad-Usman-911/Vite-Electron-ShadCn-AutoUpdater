import { useState } from 'react'
import './App.css'
import { useTheme } from "./components/theme-provider"
import { Button } from "./components/ui/button"
import { Card } from "./components/ui/card"
import { Moon, Sun } from "lucide-react"
import "./App.css"
import { UpdateDialog } from './components/UpdateDialog'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-4 right-4"
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  )
}

function App() {
  const [updateAvailable, setUpdateAvailable] = useState(false)
  const [downloadProgress, setDownloadProgress] = useState(0)
  const [isDownloading, setIsDownloading] = useState(false)
  const [isReadyToInstall, setIsReadyToInstall] = useState(false)

  const handleStartDownload = () => {
    setIsDownloading(true)
    // Your existing download logic here
  }

  const handleInstall = () => {
    // Your existing install logic here
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <div className="container mx-auto px-4 py-8">
        <Card className="p-6">
          <h1 className="text-4xl font-bold mb-4">Welcome to Electron + Vite + React</h1>
          <p className="text-lg text-muted-foreground mb-6">
            This is a starter template with shadcn/ui components and dark mode support.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="default">Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </Card>
      </div>
      
      <UpdateDialog />
    </div>
  )
}

export default App