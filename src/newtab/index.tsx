import "../main.css"
import { createRoot } from "react-dom/client"
import { useState } from "react"
import Header from "../components/header"
import Hero from "../components/hero"

import { Footer } from "../components/footer"

const NewTab = () => {
    const [showBackground, setShowBackground] = useState(false)

    return (
                <Header />
                <main>
                    <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                        <Hero />
                    </div>
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
