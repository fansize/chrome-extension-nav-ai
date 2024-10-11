import "../main.css"
import { createRoot } from "react-dom/client"
import Header from "../components/header"
import Hero from "../components/hero"

const NewTab = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <Hero />
                </div>
            </main>
        </div>
    )
}

const root = createRoot(document.getElementById("__plasmo"))
root.render(<NewTab />)
