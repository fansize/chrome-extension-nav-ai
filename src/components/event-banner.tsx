import { useState, useEffect } from 'react'

interface CountdownEvent {
    name: string
    date: Date
    color: string
}

const events: CountdownEvent[] = [
    { name: '2025年', date: new Date('2025-01-01'), color: 'text-blue-500' },
    { name: '黑五', date: new Date('2024-11-29'), color: 'text-red-500' },
    { name: '圣诞节', date: new Date('2024-12-25'), color: 'text-red-500' },
    { name: '春节', date: new Date('2025-01-29'), color: 'text-red-500' },
]

const EventBanner = () => {
    const [currentDate, setCurrentDate] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => setCurrentDate(new Date()), 1000 * 60 * 60) // 每小时更新一次
        return () => clearInterval(timer)
    }, [])

    const getCurrentWeek = () => {
        const start = new Date(currentDate.getFullYear(), 0, 1)
        const diff = currentDate.getTime() - start.getTime()
        const oneWeek = 1000 * 60 * 60 * 24 * 7
        return Math.ceil(diff / oneWeek)
    }

    const getDaysUntil = (date: Date) => {
        const diff = date.getTime() - currentDate.getTime()
        return Math.ceil(diff / (1000 * 60 * 60 * 24))
    }

    return (
        <div className="flex justify-between text-sm text-gray-600px-4 p-4 rounded-full">
            <span>{currentDate.getFullYear()}年第 {getCurrentWeek()} 周</span>
            <div className="flex items-center">
                {events.map((event, index) => (
                    <span key={index} className="ml-2">
                        距 <span className={event.color}>{event.name}</span> 还有
                        <span className="font-bold"> {getDaysUntil(event.date)} </span>天
                        {index < events.length - 1 && ' |'}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default EventBanner