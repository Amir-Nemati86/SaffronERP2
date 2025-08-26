import { Button } from "@/components/ui/button"

export function AppFooter() {
    return (
        <footer className="flex items-center justify-between p-1 border-t bg-gray-200 text-xs">
            <div className="flex items-center gap-4">
                <span>User: Oğulcan ÇAKIR</span>
                <span>USD/TRY: 17.3740</span>
                <span>EUR/TRY: 18.3403</span>
                <span>EUR/USD: 1.0556</span>
                <span>LME (USD): 2,519.505</span>
                <span>Week: 25</span>
                <span>Version: 1.4.25</span>
            </div>
            <div className="flex items-center gap-2">
                <Button variant="ghost" className="h-auto p-1 text-xs rounded-none">Date Range</Button>
                <div className="flex items-center bg-white border border-gray-400">
                    <span className="px-2">Start</span>
                    <span className="px-2 bg-gray-100 border-l border-gray-400">12/22/2021</span>
                </div>
                 <div className="flex items-center bg-white border border-gray-400">
                    <span className="px-2">End</span>
                    <span className="px-2 bg-gray-100 border-l border-gray-400">6/22/2022</span>
                </div>
                <Button variant="ghost" className="h-auto p-1 text-xs rounded-none">Fast Selection</Button>
                <select className="h-auto p-1 text-xs border border-gray-400 rounded-none bg-white">
                    <option>LAST 6 MONTH</option>
                </select>
                <Button variant="ghost" className="h-auto p-1 text-xs rounded-none bg-gray-300">Refresh</Button>
            </div>
        </footer>
    )
}
