export interface Tool {
    id: string
    name: string
    icon: string
    url: string
}

export interface ChannelItem {
    name: string
    icon: string
    description: string
    url: string
}

export const tools: Tool[] = [
    { id: "exchange-rate", name: "汇率转换", icon: "💱", url: "https://www.amz123.com/tools-exchangepage" },
    { id: "currency-calculator", name: "单位换算", icon: "📏", url: "https://www.amz123.com/tools-hlhs" },
    { id: "forex-trading", name: "成本利润计算", icon: "🧮", url: "https://www.amz123.com/tools-chengbenlirun" },
    { id: "global-markets", name: "大小写转换", icon: "🔠", url: "https://www.amz123.com/tools-toggle" }
]

export const popularChannels: ChannelItem[] = [
    { name: "生成Listing", icon: "assets/images/icons/unspeakable.png", description: "根据产品名称、描述、关键字信息生成 Listing 五点描述", url: "https://www.chat123.ai/listing" },
    { name: "SEO搜索关键词推荐", icon: "assets/images/icons/linus-tech-tips.png", description: "自动优化关键词，提高在搜索引擎中的排名和曝光率", url: "https://www.youtube.com/linustechtips" },
    { name: "买家消息回复", icon: "assets/images/icons/doctor-mike.png", description: "根据买家消息快速生成符合标准的回复模板", url: "https://www.youtube.com/doctormike" },
    { name: "亚马逊5点描述优化", icon: "assets/images/icons/mrbeast.png", description: "撰写高效精炼的5点描述,高埋词率,突出商品特色", url: "https://www.youtube.com/mrbeast" },
]
