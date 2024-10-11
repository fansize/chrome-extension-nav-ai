

interface Tool {
    id: string
    name: string
    icon: string
    url: string
    category: "热门工具" | "最新工具" | "推荐工具"
}

const tools: Tool[] = [
    { id: "unit-converter", name: "单位换算工具", icon: "🔄", url: "https://example.com/tools/unit-converter", category: "热门工具" },
    { id: "visual-editor", name: "可视化编辑器", icon: "📝", url: "https://example.com/tools/visual-editor", category: "热门工具" },
    { id: "case-converter", name: "大小写转换", icon: "Aa", url: "https://example.com/tools/case-converter", category: "热门工具" },
    { id: "emoji-list", name: "Emoji表情大全", icon: "😊", url: "https://example.com/tools/emoji-list", category: "热门工具" },
    { id: "exchange-rate", name: "汇率换算工具", icon: "💱", url: "https://example.com/tools/exchange-rate", category: "热门工具" },
    { id: "world-time", name: "世界时间地图", icon: "🕒", url: "https://example.com/tools/world-time", category: "最新工具" },
    { id: "trademark-search", name: "爆雷商标查询工具", icon: "⚠️", url: "https://example.com/tools/trademark-search", category: "最新工具" },
    { id: "us-trademark", name: "美国商标分类", icon: "🇺🇸", url: "https://example.com/tools/us-trademark", category: "最新工具" },
    { id: "online-calculator", name: "在线计算器", icon: "🧮", url: "https://example.com/tools/online-calculator", category: "最新工具" },
    { id: "world-holidays", name: "世界节假日大全", icon: "🎉", url: "https://example.com/tools/world-holidays", category: "最新工具" },
    { id: "upc-generator", name: "UPC在线生成", icon: "📊", url: "https://example.com/tools/upc-generator", category: "推荐工具" },
    { id: "hs-code", name: "海关HS编码查询", icon: "🔍", url: "https://example.com/tools/hs-code", category: "推荐工具" },
    { id: "profit-calculator", name: "成本利润计算", icon: "💰", url: "https://example.com/tools/profit-calculator", category: "推荐工具" },
    { id: "chatgpt-prompts", name: "ChatGPT 指令大全", icon: "🤖", url: "https://example.com/tools/chatgpt-prompts", category: "推荐工具" },
    { id: "copyright-check", name: "侵权检测工具", icon: "⚖️", url: "https://example.com/tools/copyright-check", category: "推荐工具" },
]

const ToolGrid = () => {
    const handleToolClick = (url: string) => {
        chrome.tabs.create({ url })
    }

    return (
        <div className="bg-white">
            <div className="grid grid-cols-3 gap-6">
                {(["热门工具", "最新工具", "推荐工具"] as const).map((category) => (
                    <div key={category} className="flex">
                        <h2 className="text-xl font-bold mb-3">{category}</h2>
                        <div className="grid grid-cols-3 gap-3">
                            {tools
                                .filter((tool) => tool.category === category)
                                .map((tool) => (
                                    <button
                                        key={tool.id}
                                        className="flex flex-col items-center justify-center p-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                                        onClick={() => handleToolClick(tool.url)}
                                    >
                                        <span className="text-2xl mb-1">{tool.icon}</span>
                                        <span className="text-xs text-center">{tool.name}</span>
                                    </button>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ToolGrid