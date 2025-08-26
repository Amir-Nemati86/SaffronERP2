'use client';

import {
  FilePlus,
  Filter,
  LogOut,
  Printer,
  RefreshCw,
  Settings,
  UserCircle,
  Warehouse,
  FileText,
  FileSearch,
  X,
  ChevronLeft,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useSidebar } from './ui/sidebar';

export function AppHeader() {
  const { toggleSidebar } = useSidebar();
  return (
    <header className="sticky top-0 z-10 flex h-auto flex-col border-b bg-muted">
      <div className="flex items-center justify-between border-b px-4 py-1">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="mr-2 h-8 w-8 lg:hidden"
            onClick={toggleSidebar}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Sidebar</span>
          </Button>
          <div className="flex items-center gap-1">
            <Button variant="ghost" className="h-auto px-2 py-1 text-sm rounded-none">
              <FilePlus className="mr-1 h-4 w-4" />
              New Sales Order
            </Button>
            <Button variant="ghost" className="h-auto px-2 py-1 text-sm rounded-none bg-gray-200">
              <FileText className="mr-1 h-4 w-4" />
              Sales Orders
            </Button>
            <Button variant="ghost" className="h-auto px-2 py-1 text-sm rounded-none">
              <FileText className="mr-1 h-4 w-4" />
              Pending Sale Orders
            </Button>
            <Button variant="ghost" className="h-auto px-2 py-1 text-sm rounded-none">
              <Warehouse className="mr-1 h-4 w-4" />
              Warehouse's Loads
            </Button>
            <Button variant="ghost" className="h-auto px-2 py-1 text-sm rounded-none">
              <FilePlus className="mr-1 h-4 w-4" />
              New Buy Request Bill
            </Button>
            <Button variant="ghost" className="h-auto px-2 py-1 text-sm rounded-none">
              <FileSearch className="mr-1 h-4 w-4" />
              Find Materials
            </Button>
            <Button variant="ghost" className="h-auto px-2 py-1 text-sm rounded-none">
              <X className="mr-1 h-4 w-4 text-red-500" />
              Close
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-4">
            <Settings size={16} />
            <Printer size={16} />
            <Filter size={16} />
            <RefreshCw size={16} />
        </div>
      </div>
    </header>
  );
}
