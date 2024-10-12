interface ChannelsProps {
    channels: {
        name: string
        icon: string
        description: string
        url: string
    }[]
}


export function Channels({ channels }: ChannelsProps) {
    const handleChannelClick = (url: string) => {
        window.open(url, '_blank')
    }

    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                {channels.map((channel) => (
                    <div key={channel.name}
                        className="flex items-center bg-gray-100 rounded-full px-4 py-2 cursor-pointer hover:bg-gray-200 transition-colors"
                        onClick={() => handleChannelClick(channel.url)}>
                        <img src={channel.icon} alt={channel.name} className="w-8 h-8 rounded-full mr-3" />
                        <div className="flex flex-col">
                            <span className="text-sm">{channel.name}</span>
                            <span className="text-xs text-gray-500">{channel.description}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}