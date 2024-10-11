import { useEffect } from "react"

const websites = [
  "https://www.google.com",
  "https://www.github.com",
  "https://www.stackoverflow.com",
  // 添加更多网站...
]

function getRandomWebsite() {
  return websites[Math.floor(Math.random() * websites.length)]
}

function Popup() {
  useEffect(() => {
    const openRandomWebsite = async () => {
      const randomWebsite = getRandomWebsite()
      await chrome.tabs.create({ url: randomWebsite })
      window.close()
    }

    openRandomWebsite()
  }, [])

  return <div>正在打开随机网页...</div>
}

export default Popup
