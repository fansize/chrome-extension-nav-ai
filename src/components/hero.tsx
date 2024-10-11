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
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-6xl font-bold mb-8 text-center">Search any YouTube Channel</h1>
            <div className="relative mb-12">
                <input
                    type="text"
                    className="w-full py-4 px-6 rounded-full border-2 border-red-500 focus:outline-none focus:border-red-600 text-lg"
                    placeholder='Try searching "Lachlan"'
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>
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