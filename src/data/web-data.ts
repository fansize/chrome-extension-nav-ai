export interface Tool {
    id: string
    name: string
    icon: string
    url: string
}

export interface PopularChannel {
    name: string
    icon: string
    description: string
    url: string
}

export const tools: Tool[] = [
    { id: "chris-bumstead", name: "Chris Bumstead", icon: "BUM.", url: "https://example.com/chris-bumstead" },
    { id: "mrbeast", name: "MrBeast", icon: "🦁", url: "https://example.com/mrbeast" },
    { id: "tommyinnit", name: "TommyInnit", icon: "👦", url: "https://example.com/tommyinnit" },
    { id: "lazarbeam", name: "LazarBeam", icon: "👨", url: "https://example.com/lazarbeam" }
]

export const popularChannels: PopularChannel[] = [
    { name: "Unspeakable", icon: "assets/images/icons/unspeakable.png", description: "科技、游戏、生活", url: "https://www.youtube.com/unspeakable" },
    { name: "Linus Tech Tips", icon: "assets/images/icons/linus-tech-tips.png", description: "科技、游戏、生活", url: "https://www.youtube.com/linustechtips" },
    { name: "Doctor Mike", icon: "assets/images/icons/doctor-mike.png", description: "科技、游戏、生活", url: "https://www.youtube.com/doctormike" },
    { name: "MrBeast", icon: "assets/images/icons/mrbeast.png", description: "科技、游戏、生活", url: "https://www.youtube.com/mrbeast" },
    { name: "Beast Reacts", icon: "assets/images/icons/beast-reacts.png", description: "科技、游戏、生活", url: "https://www.youtube.com/beastreacts" },
    { name: "SmarterEveryDay", icon: "assets/images/icons/beast-reacts.png", description: "科技、游戏、生活", url: "https://www.youtube.com/smarereveryday" }
]
