import SearchBar from "./search-bar"
import EventBanner from "./event-banner"
const unspeakableIcon = chrome.runtime.getURL("assets/images/icons/unspeakable.png")
const linusTechTipsIcon = chrome.runtime.getURL("assets/images/icons/linus-tech-tips.png")
const doctorMikeIcon = chrome.runtime.getURL("assets/images/icons/doctor-mike.png")
const mrBeastIcon = chrome.runtime.getURL("assets/images/icons/mrbeast.png")
const beastReactsIcon = chrome.runtime.getURL("assets/images/icons/beast-reacts.png")

interface PopularChannel {
    name: string
    icon: string
}

const popularChannels: PopularChannel[] = [
    { name: "Unspeakable", icon: unspeakableIcon },
    { name: "Linus Tech Tips", icon: linusTechTipsIcon },
    { name: "Doctor Mike", icon: doctorMikeIcon },
    { name: "MrBeast", icon: mrBeastIcon },
    { name: "Beast Reacts", icon: beastReactsIcon },
]


const Hero = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <SearchBar />
            <EventBanner />
            <div>
                <h2 className="text-xl font-semibold mb-4">Popular Channels</h2>
                <div className="grid grid-cols-3 gap-4">
                    {popularChannels.map((channel) => (
                        <div key={channel.name} className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                            <img src={channel.icon} alt={channel.name} className="w-8 h-8 rounded-full mr-3" />
                            <span className="text-sm">{channel.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Hero
