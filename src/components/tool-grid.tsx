import { useState } from 'react'
import "../main.css"
import { ChevronRight } from 'lucide-react'

const logo = chrome.runtime.getURL("assets/images/icons/linus-tech-tips.png")

interface Tool {
    id: string
    name: string
    icon: string
    url: string
}

const tools: Tool[] = [
    { id: "chris-bumstead", name: "Chris Bumstead", icon: "BUM.", url: "https://example.com/chris-bumstead" },
    { id: "mrbeast", name: "MrBeast", icon: "🦁", url: "https://example.com/mrbeast" },
    { id: "tommyinnit", name: "TommyInnit", icon: "👦", url: "https://example.com/tommyinnit" },
    { id: "lazarbeam", name: "LazarBeam", icon: "👨", url: "https://example.com/lazarbeam" },
]

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
                    <img src={logo} alt="跨境小灵通" className="w-6 h-6 rounded-full mr-3" />
                    <span className="font-semibold text-lg">跨境小灵通</span>
                </div>

                <div className="flex items-center bg-gray-100 text-gray-500 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors">
                    <a href="#" onClick={handleOpenNewTab}>
                        打开新标签页
                    </a>
                    <ChevronRight className="w-4 h-4 ml-1" />
                </div>
            </div>
            <h2 className="text-lg font-semibold mb-3">Trending channels</h2>
            <div className="grid grid-cols-2 gap-3">
                {tools.map((tool) => (
                    <button
                        key={tool.id}
                        className={`flex items-center p-2 rounded-lg transition-colors ${hoveredTool === tool.id ? 'bg-gray-100' : 'bg-white'
                            }`}
                        onClick={() => handleToolClick(tool.url)}
                        onMouseEnter={() => setHoveredTool(tool.id)}
                        onMouseLeave={() => setHoveredTool(null)}
                    >
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2 overflow-hidden">
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