import { useEffect } from "react"

const Popup = () => {
  useEffect(() => {
    chrome.tabs.create({ url: "newtab.html" })
    window.close()
  }, [])

  return null
}

export default Popup
