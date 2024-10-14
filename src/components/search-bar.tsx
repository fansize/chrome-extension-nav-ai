import { useState, useEffect } from 'react'
import { Storage } from "@plasmohq/storage"
import { Plus, X } from 'lucide-react'

// 定义平台接口
interface Platform {
    id: string
    name: string
    searchUrl: string
}

// 存储键名常量
const STORAGE_KEYS = {
    PLATFORMS: "platforms",
    SELECTED_PLATFORM: "selectedPlatform"
} as const

// 初始平台列表
const initialPlatforms: Platform[] = [
    { id: 'amazon-us', name: '美亚', searchUrl: 'https://www.amazon.com/s?k=' },
    { id: 'amazon-de', name: '德亚', searchUrl: 'https://www.amazon.de/s?k=' },
    { id: 'temu', name: 'Temu', searchUrl: 'https://www.temu.com/search_result.html?search_key=' },
    { id: 'etsy', name: 'Etsy', searchUrl: 'https://www.etsy.com/search?q=' }
]

function useSearch() {
    const [platforms, setPlatforms] = useState(initialPlatforms)
    const [selectedPlatform, setSelectedPlatform] = useState(platforms[0])
    const [searchTerm, setSearchTerm] = useState('')
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const storage = new Storage()

    useEffect(() => {
        const loadStoredData = async () => {
            // 从存储中获取平台列表和选中的平台ID
            const storedPlatforms = await storage.get<Platform[]>(STORAGE_KEYS.PLATFORMS)
            const storedPlatformId = await storage.get<string>(STORAGE_KEYS.SELECTED_PLATFORM)

            // 如果存储的平台列表有效，则更新状态
            if (storedPlatforms && Array.isArray(storedPlatforms)) {
                setPlatforms(storedPlatforms)
            }

            // 如果存储的平台ID有效，则更新选中的平台
            if (storedPlatformId) {
                const platform = platforms.find(p => p.id === storedPlatformId)
                if (platform) {
                    setSelectedPlatform(platform)
                }
            }
        }
        loadStoredData()
    }, [])

    // 处理搜索操作
    const handleSearch = () => {
        if (searchTerm.trim()) {
            const searchUrl = `${selectedPlatform.searchUrl}${encodeURIComponent(searchTerm)}`
            chrome.tabs.create({ url: searchUrl })
        }
    }

    // 处理平台切换
    const handlePlatformChange = async (platform: Platform) => {
        setSelectedPlatform(platform)
        await storage.set(STORAGE_KEYS.SELECTED_PLATFORM, platform.id)
    }

    // 处理添加新平台
    const handleAddPlatform = async (newPlatform: Platform) => {
        const updatedPlatforms = [...platforms, newPlatform]
        setPlatforms(updatedPlatforms)
        await storage.set(STORAGE_KEYS.PLATFORMS, updatedPlatforms)
        setIsAddModalOpen(false)
    }

    // 添加删除平台的函数
    const handleDeletePlatform = async (platformId: string) => {
        const updatedPlatforms = platforms.filter(p => p.id !== platformId)
        setPlatforms(updatedPlatforms)
        await storage.set(STORAGE_KEYS.PLATFORMS, updatedPlatforms)

        // 如果删除的是当前选中的平台，则选择第一个平台
        if (selectedPlatform.id === platformId && updatedPlatforms.length > 0) {
            setSelectedPlatform(updatedPlatforms[0])
            await storage.set(STORAGE_KEYS.SELECTED_PLATFORM, updatedPlatforms[0].id)
        }
    }

    return {
        platforms,
        selectedPlatform,
        searchTerm,
        setSearchTerm,
        handleSearch,
        handlePlatformChange,
        isAddModalOpen,
        setIsAddModalOpen,
        handleAddPlatform,
        handleDeletePlatform
    }
}

const AddPlatformModal = ({ isOpen, onClose, onAdd }) => {
    const [name, setName] = useState('')
    const [searchUrl, setSearchUrl] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onAdd({ id: Date.now().toString(), name, searchUrl })
        setName('')
        setSearchUrl('')
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">添加新搜索</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="名称"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full mb-4 p-2 border rounded"
                    />
                    <input
                        type="text"
                        placeholder="搜索 URL"
                        value={searchUrl}
                        onChange={(e) => setSearchUrl(e.target.value)}
                        className="w-full mb-4 p-2 border rounded"
                    />
                    <div className="flex justify-end">
                        <button type="button" onClick={onClose} className="mr-2 px-4 py-2 bg-gray-200 rounded">取消</button>
                        <button type="submit" className="px-4 py-2 bg-red-500 text-white rounded">添加</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const SearchBar = () => {
    const {
        platforms,
        selectedPlatform,
        searchTerm,
        setSearchTerm,
        handleSearch,
        handlePlatformChange,
        isAddModalOpen,
        setIsAddModalOpen,
        handleAddPlatform,
        handleDeletePlatform
    } = useSearch()

    return (
        <div>
            <div className="flex mb-4 px-2 items-center">
                {platforms.map((platform) => (
                    <div
                        key={platform.id}
                        className="relative group mr-2"
                    >
                        <button
                            className={`px-6 py-2 rounded-full ${selectedPlatform.id === platform.id
                                    ? 'bg-red-500 text-white'
                                    : 'bg-gray-50 text-gray-500'
                                }`}
                            onClick={() => handlePlatformChange(platform)}
                        >
                            {platform.name}
                        </button>
                        <button
                            className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-1 hidden group-hover:block"
                            onClick={(e) => {
                                e.stopPropagation()
                                handleDeletePlatform(platform.id)
                            }}
                        >
                            <X className="w-3 h-3" />
                        </button>
                    </div>
                ))}
                <button
                    className="p-2 rounded-full"
                    onClick={() => setIsAddModalOpen(true)}
                >
                    <Plus className="w-4 h-4" />
                </button>
            </div>
            <div className="relative">
                <input
                    type="text"
                    className="w-full py-4 px-6 rounded-full border-2 border-red-500 focus:outline-none focus:border-red-600 text-lg"
                    placeholder={`在 ${selectedPlatform.name} 上搜索商品`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white p-3 rounded-full"
                    onClick={handleSearch}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>

            {/* 添加搜索的弹窗 */}
            <AddPlatformModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onAdd={handleAddPlatform}
            />
        </div>
    )
}

export default SearchBar
