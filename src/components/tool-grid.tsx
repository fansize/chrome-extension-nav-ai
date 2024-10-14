import "../main.css"
import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { tools } from '../data/web-data'

const logo = chrome.runtime.getURL("assets/images/icons/linus-tech-tips.png")

const STRINGS = {
    TITLE: "跨境小灵通",
    OPEN_NEW_TAB: "查看全部",
    TRENDING_CHANNELS: "常用工具",
};

const ToolGrid = () => {
    const [hoveredTool, setHoveredTool] = useState<string | null>(null)

    const handleToolClick = (url: string) => {
        chrome.tabs.create({ url })
    }

    const handleOpenNewTab = () => {
        chrome.tabs.create({ url: chrome.runtime.getURL("newtab.html") })
    }

    return (
        <div className="p-4 max-w-md mx-auto">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <img src={logo} alt={STRINGS.TITLE} className="w-6 h-6 rounded-full mr-3" />
                    <span className="font-semibold text-lg">{STRINGS.TITLE}</span>
                </div>

                <div className="flex items-center bg-gray-100 text-gray-500 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors">
                    <a href="#" onClick={handleOpenNewTab}>
                        {STRINGS.OPEN_NEW_TAB}
                    </a>
                    <ChevronRight className="w-4 h-4 ml-1" />
                </div>
            </div>
            <h2 className="text-sm text-gray-500 font-semibold mb-3">{STRINGS.TRENDING_CHANNELS}</h2>
            <div className="grid grid-cols-2 gap-3">
                {tools.map((tool) => (
                    <button
                        key={tool.id}
                        className={`flex items-center p-2 rounded border border-gray-200 transition-colors ${hoveredTool === tool.id ? 'bg-gray-100' : 'bg-white'
                            }`}
                        onClick={() => handleToolClick(tool.url)}
                        onMouseEnter={() => setHoveredTool(tool.id)}
                        onMouseLeave={() => setHoveredTool(null)}
                    >
                        <div className="w-4 h-4 rounded-full flex items-center justify-center mr-2 overflow-hidden">
                            {tool.icon.startsWith('http') ? (
                                <img src={tool.icon} alt={tool.name} className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-sm font-bold">{tool.icon}</span>
                            )}
                        </div>
                        <span className="text-sm">{tool.name}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ToolGrid
