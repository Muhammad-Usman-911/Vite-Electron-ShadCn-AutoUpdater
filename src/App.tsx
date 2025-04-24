//src/App.tsx
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTheme } from "./components/theme-provider"
import { Button } from "./components/ui/button"
import { Moon, Sun } from "lucide-react"
import "./App.css"
import { UpdateDialog } from './components/update/UpdateDialog'
import NavBar from './components/NavBar/NavBar';

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


// Lazy load the pages
const Home = lazy(() => import('./pages/Home'));
const ReadmePage = lazy(() => import('./pages/ReadmePage'));

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <div className='fixed bottom-2 right-3'> 
        <UpdateDialog />
      </div>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/readme" element={<ReadmePage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App