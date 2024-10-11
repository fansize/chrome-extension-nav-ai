import ToolGrid from "../components/tool-grid"

const Popup = () => {
  const handleOpenNewTab = () => {
    chrome.tabs.create({ url: chrome.runtime.getURL("newtab.html") })
  }

  return (
    <div
      style={{
        width: 400,
        padding: 6,
      }}>
      <ToolGrid />
      <div className="mt-4 flex justify-center">
        <button
          onClick={handleOpenNewTab}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          打开新标签页
        </button>
      </div>
    </div>
  )
}

export default Popup
