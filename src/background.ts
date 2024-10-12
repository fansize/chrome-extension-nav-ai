export { }

function getFormattedTime(timezone: string): string {
    const now = new Date()
    const options: Intl.DateTimeFormatOptions = {
        timeZone: timezone,
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    }
    return new Intl.DateTimeFormat("zh-CN", options).format(now).replace(/\//g, "-")
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getTime") {
        const time = getFormattedTime(request.timezone)
        sendResponse({ time })
    }
})
