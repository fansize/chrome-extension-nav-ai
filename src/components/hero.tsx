import { useState, useEffect } from "react"
import SearchBar from "./search-bar"
import EventBanner from "./event-banner"
import { Channels } from "./channels"
import { popularChannels } from '../data/web-data'
import type { PopularChannel } from '../data/web-data'

const Hero = () => {
    const [channels, setChannels] = useState<PopularChannel[]>([])

    useEffect(() => {
        const updatedChannels = popularChannels.map(channel => ({
            ...channel,
            icon: chrome.runtime.getURL(channel.icon)
        }))
        setChannels(updatedChannels)
    }, [])

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="mb-12">
                <SearchBar />
                <EventBanner />
            </div>

            <div className="flex flex-col gap-8">
                <Channels channels={channels} />
            </div>
        </div>
    )
}

export default Hero
