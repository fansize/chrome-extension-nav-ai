import { useState, useEffect } from "react"

interface Region {
    name: string
    flag: string
    timezone: string
}

const regions: Region[] = [
    { name: "美东", flag: "🇺🇸", timezone: "America/New_York" },
    { name: "美西", flag: "🇺🇸", timezone: "America/Los_Angeles" },
    { name: "英国", flag: "🇬🇧", timezone: "Europe/London" },
    { name: "欧洲", flag: "🇪🇺", timezone: "Europe/Paris" },
    { name: "北京", flag: "🇨🇳", timezone: "Asia/Shanghai" },
    { name: "日本", flag: "🇯🇵", timezone: "Asia/Tokyo" }
]

const STRINGS = {
    pageTitle: "跨境小灵通"
}

const Header = () => {
    const [times, setTimes] = useState<Record<string, string>>({})

    useEffect(() => {
        const updateTimes = () => {
            regions.forEach(({ timezone }) => {
                chrome.runtime.sendMessage({ action: "getTime", timezone }, (response) => {
                    setTimes(prevTimes => ({ ...prevTimes, [timezone]: response.time }))
                })
            })
        }

        updateTimes()
        const intervalId = setInterval(updateTimes, 1000)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <h1 className="text-xl font-semibold text-gray-900">{STRINGS.pageTitle}</h1>
                <div className="flex space-x-4">
                    {regions.map(({ name, flag, timezone }) => (
                        <div key={name} className="world-time">
                            <span className="world-time-flag">{flag}</span>
                            <span className="world-time-region">{name}</span>
                            <span className="world-time-datetime">{times[timezone] || "加载中..."}</span>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Header