//src/pages/Home.tsx

import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { UpdateDialog } from '../components/update/UpdateDialog'


export default function Home() {

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Home Page Code */}
            <div className="container mx-auto px-4 py-8">
                <Card className="p-6">
                    <h1 className="text-4xl font-bold mb-4 text-center">Welcome to Electron + Vite + React</h1>
                    <p className="text-lg text-muted-foreground mb-6 text-center">
                        This is a starter template with shadcn/ui components and dark mode support.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button variant="default">Get Started</Button>
                        <Button variant="outline">Learn More</Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}
