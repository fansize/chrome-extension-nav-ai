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
        <div className="grid grid-cols-3 gap-4">
            {channels.map((channel) => (
                <div key={channel.name}
                    className="bg-white rounded-lg p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleChannelClick(channel.url)}>
                    <div className="flex items-center mb-3">
                        <img src={channel.icon} alt={channel.name} className="w-10 h-10 rounded-full mr-3" />
                        <h3 className="text-lg font-semibold">{channel.name}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{channel.description}</p>
                </div>
            ))}
        </div>
    )
}
