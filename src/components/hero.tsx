import SearchBar from "./search-bar"
import EventBanner from "./event-banner"
import { Channels } from "./channels"
const unspeakableIcon = chrome.runtime.getURL("assets/images/icons/unspeakable.png")
const linusTechTipsIcon = chrome.runtime.getURL("assets/images/icons/linus-tech-tips.png")
const doctorMikeIcon = chrome.runtime.getURL("assets/images/icons/doctor-mike.png")
const mrBeastIcon = chrome.runtime.getURL("assets/images/icons/mrbeast.png")
const beastReactsIcon = chrome.runtime.getURL("assets/images/icons/beast-reacts.png")

interface PopularChannel {
    name: string
    icon: string
    description: string
    url: string
}

const popularChannels: PopularChannel[] = [
    { name: "Unspeakable", icon: unspeakableIcon, description: "科技、游戏、生活", url: "https://www.youtube.com/unspeakable" },
    { name: "Linus Tech Tips", icon: linusTechTipsIcon, description: "科技、游戏、生活", url: "https://www.youtube.com/linustechtips" },
    { name: "Doctor Mike", icon: doctorMikeIcon, description: "科技、游戏、生活", url: "https://www.youtube.com/doctormike" },
    { name: "MrBeast", icon: mrBeastIcon, description: "科技、游戏、生活", url: "https://www.youtube.com/mrbeast" },
    { name: "Beast Reacts", icon: beastReactsIcon, description: "科技、游戏、生活", url: "https://www.youtube.com/beastreacts" },
]


const Hero = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="mb-12">
                <SearchBar />
                <EventBanner />
            </div>
            <div className="flex flex-col gap-8">
                <Channels channels={popularChannels} />
                <Channels channels={popularChannels} />
            </div>

        </div>
    )
}

export default Hero
