import "../main.css"
import { createRoot } from "react-dom/client"
import { useState } from "react"
import Header from "../components/header"
import Hero from "../components/hero"

import { Footer } from "../components/footer"

const NewTab = () => {
    const [showBackground, setShowBackground] = useState(false)

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header />
            <main>
                <Hero />
            </main>
            <Footer
                showBackground={showBackground}
                setShowBackground={setShowBackground}
            />
        </div >
    )
}

const root = createRoot(document.getElementById("__plasmo"))
root.render(<NewTab />)
