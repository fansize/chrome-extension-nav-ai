import React from "react"
import { createRoot } from "react-dom/client"
import "../main.css"

interface Region {
    name: string
    flag: string
    timezone: string
}

const regions: Region[] = [
    { name: "北京", flag: "🇨🇳", timezone: "Asia/Shanghai" },
    { name: "美东", flag: "🇺🇸", timezone: "America/New_York" },
    { name: "美西", flag: "🇺🇸", timezone: "America/Los_Angeles" },
    { name: "英国", flag: "🇬🇧", timezone: "Europe/London" },
    { name: "欧洲", flag: "🇪🇺", timezone: "Europe/Paris" },
    { name: "日本", flag: "🇯🇵", timezone: "Asia/Tokyo" }
]

const STRINGS = {
    pageTitle: "跨境小灵通",
    dateTimeFormat: "MM-DD HH:mm:ss"
}

const NewTab = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-xl font-semibold text-gray-900">{STRINGS.pageTitle}</h1>
                    <div className="flex space-x-4">
                        {regions.map(({ name, flag, timezone }) => (
                            <div key={name} className="world-time">
                                <span className="world-time-flag">{flag}</span>
                                <span className="world-time-region">{name}</span>
                                <span className="world-time-datetime">10-11 14:36:45</span>
                            </div>
                        ))}
                    </div>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                            {/* 这里添加跨境资讯、综合软件等内容 */}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

const root = createRoot(document.getElementById("__plasmo"))
root.render(<NewTab />)
