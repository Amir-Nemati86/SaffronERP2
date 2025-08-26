'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ShoppingCart,
  Shapes,
  Truck,
  Factory,
  PackageCheck,
  ClipboardCheck,
  Settings,
  Book,
  FileText,
} from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const menuItems = [
  { href: '/sales', label: 'SALES', icon: ShoppingCart, subItems: [
      { href: '/sales/customers', label: 'Customers' },
      { href: '/sales', label: 'Sales Orders' },
      { href: '/sales/dispatches', label: 'Sale Dispatches' },
      { href: '/sales/invoices', label: 'Sale Invoices' },
      { href: '/sales/pending-orders', label: 'Pending Sale Orders' },
      { href: '/sales/pending-orders-pivot', label: 'Pending Sale Orders (Pivot)' },
      { href: '/sales/order-details', label: 'Sales Order Details' },
      { href: '/sales/price-lists', label: 'Profile Price Lists' },
      { href: '/sales/stock-movements', label: 'Sales Stock Movements' },
      { href: '/sales/delivery-amounts', label: 'Sales Delivery Amounts' },
  ]},
  { href: '/purchasing', label: 'PURCHASE', icon: Truck },
  { href: '/material-management', label: 'MATERIAL MANAGEMENT', icon: Book },
  { href: '/dies', label: 'DIE MANAGEMENT', icon: Shapes, subItems: [
    { href: '/dies/profile-cards', label: 'Profile Cards' },
    { href: '/dies/profile-catalogue', label: 'Profile Catalogue' },
    { href: '/dies', label: 'Die Cards' },
    { href: '/dies/in-manufacturing', label: 'Dies in Manufacturing' },
    { href: '/dies/movements', label: 'Die Movements' },
    { href: '/dies/forthcoming-to-nitration', label: 'Dies Forthcoming to Nitration' },
    { href: '/dies/requests', label: 'Die Requests' },
    { href: '/dies/orders', label: 'Die Orders' },
    { href: '/dies/awaiting', label: 'Awaiting Die Orders' },
    { href: '/dies/slips', label: 'Die Slips' },
    { href: '/dies/problems', label: 'Die Problems' },
    { href: '/dies/pending-for-production', label: 'Pending Dies For Production' },
  ]},
  { href: '/production', label: 'PRODUCTION', icon: Factory },
  { href: '/delivery', label: 'DELIVERY', icon: PackageCheck },
  { href: '/quality', label: 'QUALITY CONTROL', icon: ClipboardCheck },
  { href: '/reports', label: 'REPORTS', icon: FileText },
  { href: '/admin', label: 'DEFINITION', icon: Settings },
  { href: '/settings', label: 'SETTINGS', icon: Settings },
];

export function AppSidebar() {
  const pathname = usePathname();
  const activeTopLevelItem = menuItems.find(item => pathname.startsWith(item.href));
  const [openAccordion, setOpenAccordion] = React.useState<string | undefined>(activeTopLevelItem?.label);

  React.useEffect(() => {
    const activeItem = menuItems.find(item => pathname.startsWith(item.href));
    if (activeItem) {
      setOpenAccordion(activeItem.label);
    }
  }, [pathname]);

  return (
    <aside className="w-[300px] border-r bg-gray-100 flex flex-col pt-1">
      <Accordion type="single" collapsible value={openAccordion} onValueChange={setOpenAccordion} className="w-full">
        {menuItems.map((item) => (
           <React.Fragment key={item.label}>
            {item.subItems ? (
              <AccordionItem value={item.label} className="border-b-0">
                 <AccordionContent className="p-0">
                    <div className="bg-white p-2">
                        <h2 className="p-2 text-xs font-bold text-blue-600">{item.label}</h2>
                        <ul>
                        {item.subItems.map((subItem) => (
                            <li key={subItem.href}>
                            <Link
                                href={subItem.href}
                                className={cn(
                                "block px-2 py-1 text-xs hover:bg-gray-200",
                                pathname === subItem.href ? "bg-blue-100 font-bold" : ""
                                )}
                            >
                                {subItem.label}
                            </Link>
                            </li>
                        ))}
                        </ul>
                    </div>
                </AccordionContent>
                <AccordionTrigger
                  className={cn(
                    "flex items-center p-2 text-xs hover:bg-gray-200 w-full justify-start [&[data-state=open]>svg]:hidden",
                    activeTopLevelItem?.label === item.label ? "bg-gray-300 font-bold" : ""
                  )}
                >
                    <div className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        <span>{item.label}</span>
                    </div>
                </AccordionTrigger>
              </AccordionItem>
            ) : (
              <div className="border-b">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center p-2 text-xs hover:bg-gray-200 w-full",
                    activeTopLevelItem?.label === item.label ? "bg-gray-300 font-bold" : ""
                  )}
                >
                  <div className="flex items-center gap-2">
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </div>
                </Link>
              </div>
            )}
           </React.Fragment>
        ))}
      </Accordion>
    </aside>
  );
}
