import { Github, Globe } from "lucide-react"
import { Button } from "./ui/button"

interface FooterProps {
    showBackground: boolean
    setShowBackground: (show: boolean) => void
}

export function Footer({ showBackground, setShowBackground }: FooterProps) {
    return (
        <footer className="fixed bottom-0 left-0 right-0 flex justify-center items-center p-4">
            <div className="flex items-center space-x-4">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => window.open("https://langtang.vercel.app/", "_blank")}
                    aria-label="作者网站"
                >
                    <Globe className="h-5 w-5" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => window.open("https://github.com/fansize/chrome-extension-nav-ai", "_blank")}
                    aria-label="GitHub 仓库"
                >
                    <Github className="h-5 w-5" />
                </Button>

                {/* <Switch
                    checked={showBackground}
                    onCheckedChange={setShowBackground}
                /> */}
            </div>
        </footer>
    )
}
