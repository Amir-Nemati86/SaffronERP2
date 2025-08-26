import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';


const StatusIndicator = ({ color }: { color: string }) => (
  <div className={`h-3 w-3 rounded-full ${color}`}></div>
);

const salesOrders = [
  {
    percent: '0%',
    ficheNo: '0000000236',
    revNo: '00',
    fileNo: '',
    custOr: '',
    firmName: 'JOHN AND OWEN COMPANY LTD.',
    date: '6/22/2022',
    deliveryDate: '',
    deliWeek: '1',
    deliYear: '2022',
    kg: '964.00 Kg',
    deliveredExKg: '0.00 Kg',
    pendingExKg: '964.00 Kg',
    localCurTotal: '₺75,324.25',
    total: '4,399.60',
    curr: 'USD',
    depa: 'FABR...',
    wareh: 'STOK A...',
    createdUser: 'Oğulcan Ç...',
    rm: 'Oğ...',
    prodConf: 'JUL',
    st: 'KA...',
    statusColor: 'bg-green-500',
    an: 'OPI',
  },
  {
    percent: '0%',
    ficheNo: '0000000235',
    revNo: '00',
    fileNo: '',
    custOr: 'Oğulcan D...',
    firmName: 'OĞULCAN ÇAKIR',
    date: '6/20/2022',
    deliveryDate: '',
    deliWeek: '1',
    deliYear: '2022',
    kg: '20,000.00 Kg',
    deliveredExKg: '0.00 Kg',
    pendingExKg: '20,000.00...',
    localCurTotal: '₺1,160,201.00',
    total: '1,150,20...',
    curr: 'TL',
    depa: 'FABR...',
    wareh: 'STOK A...',
    createdUser: 'Oğulcan Ç...',
    rm: 'Oğ...',
    prodConf: 'L BUL',
    st: 'KA',
    statusColor: 'bg-green-500',
    an: 'OPI',
  },
  {
    percent: '0%',
    ficheNo: '0000000234',
    revNo: '00',
    fileNo: '',
    custOr: '',
    firmName: 'YENİ FABRİKA',
    date: '6/18/2022',
    deliveryDate: '',
    deliWeek: '1',
    deliYear: '2022',
    kg: '36.25 Kg',
    deliveredExKg: '0.00 Kg',
    pendingExKg: '36.25 Kg',
    localCurTotal: '₺1,268.75',
    total: '1,268.75',
    curr: 'TL',
    depa: 'FABR...',
    wareh: 'STOK A...',
    createdUser: 'Yarkın ÇO...',
    rm: 'Yarkın ÇOL',
    prodConf: 'KABUL',
    st: 'KA...',
    statusColor: 'bg-green-500',
    an: 'OP',
  },
  {
    percent: '0%',
    ficheNo: '0000000233',
    revNo: '00',
    fileNo: '',
    custOr: '',
    firmName: 'DÖKÜM FİRMASI',
    date: '6/18/2022',
    deliveryDate: '',
    deliWeek: '1',
    deliYear: '2022',
    kg: '20,597.00 Kg',
    deliveredExKg: '0.00 Kg',
    pendingExKg: '20,597.00',
    localCurTotal: '₺1,774,588.91',
    total: '102,449....',
    curr: 'USD',
    depa: 'FABR...',
    wareh: 'STOK A...',
    createdUser: 'Yarkın ÇO...',
    rm: 'Yarkın ÇOL',
    prodConf: 'KABUL',
    st: 'KA...',
    statusColor: 'bg-red-500',
    an: 'OP',
  },
  {
    percent: '0%',
    ficheNo: '0000000232',
    revNo: '00',
    fileNo: '',
    custOr: '',
    firmName: 'ALU FIRM',
    date: '5/25/2022',
    deliveryDate: '',
    deliWeek: '1',
    deliYear: '2022',
    kg: '0.00 Kg',
    deliveredExKg: '0.00 Kg',
    pendingExKg: '0.00 Kg',
    localCurTotal: '₺0.00',
    total: '0.00',
    curr: 'TL',
    depa: 'FABR...',
    wareh: 'STOK A...',
    createdUser: 'Oğulcan Ç...',
    rm: 'Yarkın ÇOL...',
    prodConf: 'TEKLİF',
    st: 'AN...',
    statusColor: 'bg-yellow-500',
    an: 'OPE',
    selected: true,
  },
  {
    percent: '0%',
    ficheNo: '0000000231',
    revNo: '00',
    fileNo: '',
    custOr: '',
    firmName: 'KOÇ FİRMASI',
    date: '5/11/2022',
    deliveryDate: '',
    deliWeek: '1',
    deliYear: '2022',
    kg: '528.00 Kg',
    deliveredExKg: '0.00 Kg',
    pendingExKg: '528.00 Kg',
    localCurTotal: '₺28,540.00',
    total: '28,540.00',
    curr: 'TL',
    depa: 'FABR...',
    wareh: 'STOK A...',
    createdUser: 'Yarkın ÇO...',
    rm: 'Oğulkan Ç.',
    prodConf: 'KABUL',
    st: 'RE...',
    statusColor: 'bg-green-500',
    an: 'OPI',
  },
  {
    percent: '100%',
    ficheNo: '0000000220',
    revNo: '00',
    fileNo: '',
    custOr: '',
    firmName: 'alpifirma',
    date: '4/8/2022',
    deliveryDate: '',
    deliWeek: '1',
    deliYear: '2022',
    kg: '0.80 Kg',
    deliveredExKg: '1.91 Kg',
    pendingExKg: '0.00 Kg',
    localCurTotal: '₺0.00',
    total: '0.00',
    curr: 'TL',
    depa: 'FABR...',
    wareh: 'STOK A...',
    createdUser: 'Yarkın ÇO...',
    rm: 'Yarkın ÇOL',
    prodConf: 'KABUL',
    st: 'KA...',
    statusColor: 'bg-green-500',
    an: 'CLO',
    highlighted: true,
  },
  {
    percent: '0%',
    ficheNo: '0000000228',
    revNo: '00',
    fileNo: '',
    custOr: '',
    firmName: 'YARKIN ÇOLAK',
    date: '4/21/2022',
    deliveryDate: '',
    deliWeek: '1',
    deliYear: '2022',
    kg: '774.00 Kg',
    deliveredExKg: '0.00 Kg',
    pendingExKg: '774.00 Kg',
    localCurTotal: '₺0.00',
    total: '0.00',
    curr: 'TL',
    depa: 'FABR...',
    wareh: 'STOK A...',
    createdUser: 'Yarkın ÇO...',
    rm: 'Yarkın ÇOL',
    prodConf: 'TEKLİF',
    st: 'AN...',
    statusColor: 'bg-yellow-500',
    an: 'OPE',
  },
  {
    percent: '0%',
    ficheNo: '0000000227',
    revNo: '00',
    fileNo: '',
    custOr: '',
    firmName: 'PARK METAL',
    date: '4/21/2022',
    deliveryDate: '',
    deliWeek: '1',
    deliYear: '2022',
    kg: '403.24 Kg',
    deliveredExKg: '0.00 Kg',
    pendingExKg: '403.24 Kg',
    localCurTotal: '₺30,692.99',
    total: '30,692.99',
    curr: 'TL',
    depa: 'FABR...',
    wareh: 'STOK A...',
    createdUser: 'Yarkın ÇO...',
    rm: 'Oğulcan Ç.',
    prodConf: 'TEKLİF',
    st: 'AN...',
    statusColor: 'bg-yellow-500',
    an: 'OPI',
  },
  {
    percent: '0%',
    ficheNo: '0000000226',
    revNo: '00',
    fileNo: '',
    custOr: '',
    firmName: 'ALU FIRM',
    date: '4/21/2022',
    deliveryDate: '',
    deliWeek: '1',
    deliYear: '2022',
    kg: '84.10 Kg',
    deliveredExKg: '0.00 Kg',
    pendingExKg: '84.10 Kg',
    localCurTotal: '₺7,240.95',
    total: '482.73',
    curr: 'USD',
    depa: 'FABR...',
    wareh: 'STOK A...',
    createdUser: 'Yarkın ÇO...',
    rm: 'Yarkın ÇOL',
    prodConf: 'TEKLİF',
    st: 'AN...',
    statusColor: 'bg-yellow-500',
    an: 'OPI',
  },
  {
    percent: '0%',
    ficheNo: '0000000225',
    revNo: '00',
    fileNo: '',
    custOr: '',
    firmName: 'ALUDATA FİRMASI',
    date: '4/21/2022',
    deliveryDate: '',
    deliWeek: '1',
    deliYear: '2022',
    kg: '0.00 Kg',
    deliveredExKg: '0.00 Kg',
    pendingExKg: '0.00 Kg',
    localCurTotal: '₺0.00',
    total: '0.00',
    curr: 'EUR',
    depa: 'FABR...',
    wareh: 'STOK A...',
    createdUser: 'Oğulcan Ç...',
    rm: 'Yarkın ÇOL',
    prodConf: 'TEKLİF',
    st: 'AN...',
    statusColor: 'bg-yellow-500',
    an: 'OPE',
  },
  {
    percent: '0%',
    ficheNo: '0000000224',
    revNo: '00',
    fileNo: '',
    custOr: '',
    firmName: 'ANS FIRM LTD.',
    date: '4/21/2022',
    deliveryDate: '',
    deliWeek: '1',
    deliYear: '2022',
    kg: '7,740.00 Kg',
    deliveredExKg: '0.00 Kg',
    pendingExKg: '7,740.00 Kg',
    localCurTotal: '₺645,779.50',
    total: '40,635.77',
    curr: 'EUR',
    depa: 'FABR...',
    wareh: 'STOK A...',
    createdUser: 'Yarkın ÇO...',
    rm: 'Oğulkan Ç',
    prodConf: 'TEKLİF',
    st: 'AN...',
    statusColor: 'bg-yellow-500',
    an: 'OP',
  },
  {
    percent: '0%',
    ficheNo: '0000000223',
    revNo: '01',
    fileNo: '',
    custOr: '',
    firmName: 'YARKIN ÇOLAK',
    date: '4/12/2022',
    deliveryDate: '',
    deliWeek: '1',
    deliYear: '2022',
    kg: '1,633.60 Kg',
    deliveredExKg: '0.00 Kg',
    pendingExKg: '1,633.60 Kg',
    localCurTotal: '₺101,251.11',
    total: '101,251....',
    curr: 'TL',
    depa: 'FABR...',
    wareh: 'STOK A...',
    createdUser: 'Yarkın ÇO...',
    rm: 'Yarkın ÇOL',
    prodConf: 'KABUL',
    st: 'RE',
    statusColor: 'bg-red-500',
    an: 'OPF',
  },
];

const FilterIcon = () => (
  <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.13194 6.31944V3.88194L0.208333 0.958333H7.79167L4.86806 3.88194V5.54167L3.13194 6.31944Z" fill="#4A4A4A"/>
  </svg>
);


const TableHeaderCell = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <TableHead className={cn("p-1 h-auto font-bold text-black border", className)}>
        <div className="flex items-center justify-between">
            <span>{children}</span>
            <FilterIcon />
        </div>
    </TableHead>
);

export default function SalesPage() {
  return (
    <Card className="rounded-none h-full flex flex-col">
      <CardHeader className="p-2 border-b">
        <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-semibold">SALES ORDERS</CardTitle>
        </div>
        <CardDescription className="text-xs">
            Drag a column header here to group by that column
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 flex-grow overflow-auto">
        <Table className="text-xs table-fixed border-collapse">
          <TableHeader>
            <TableRow className="bg-gray-100 hover:bg-gray-100">
                <TableHead className="w-8 p-1 border"></TableHead>
                <TableHeaderCell>%</TableHeaderCell>
                <TableHeaderCell>FICHE NO</TableHeaderCell>
                <TableHeaderCell>REV. NO</TableHeaderCell>
                <TableHeaderCell>FILE NO</TableHeaderCell>
                <TableHeaderCell>CUST.OR.</TableHeaderCell>
                <TableHeaderCell className="w-48">FIRM NAME</TableHeaderCell>
                <TableHeaderCell className="bg-yellow-200">DATE</TableHeaderCell>
                <TableHeaderCell className="bg-yellow-200">DELIVERY DATE</TableHeaderCell>
                <TableHeaderCell>DELI... WEEK</TableHeaderCell>
                <TableHeaderCell>DELI.. YEAR</TableHeaderCell>
                <TableHeaderCell>KG</TableHeaderCell>
                <TableHeaderCell>DELIVERED EX KG</TableHeaderCell>
                <TableHeaderCell>PENDING EX KG</TableHeaderCell>
                <TableHeaderCell>LOCAL CUR. TOTAL</TableHeaderCell>
                <TableHeaderCell>TOTAL</TableHeaderCell>
                <TableHeaderCell>CURR.</TableHeaderCell>
                <TableHeaderCell>DEPA...</TableHeaderCell>
                <TableHeaderCell>WAREH..</TableHeaderCell>
                <TableHeaderCell>CREATED USER</TableHeaderCell>
                <TableHeaderCell>RM</TableHeaderCell>
                <TableHeaderCell>PROD. CONF..</TableHeaderCell>
                <TableHeaderCell>ST</TableHeaderCell>
                <TableHead className="p-1 border"></TableHead>
                <TableHeaderCell>AN...</TableHeaderCell>
                <TableHead className="p-1 border"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {salesOrders.map((order, index) => (
              <TableRow 
                key={order.ficheNo} 
                className={cn(
                    'h-6',
                    order.selected && 'bg-blue-500 text-white',
                    order.highlighted && 'bg-green-200',
                    !order.selected && !order.highlighted && index % 2 !== 0 && 'bg-gray-50'
                )}
                >
                <TableCell className="p-1 border text-blue-500">
                  {order.selected && <ChevronRight size={16} />}
                </TableCell>
                <TableCell className="p-1 border text-right">{order.percent}</TableCell>
                <TableCell className="p-1 border">{order.ficheNo}</TableCell>
                <TableCell className="p-1 border">{order.revNo}</TableCell>
                <TableCell className="p-1 border">{order.fileNo}</TableCell>
                <TableCell className="p-1 border">{order.custOr}</TableCell>
                <TableCell className="p-1 border">{order.firmName}</TableCell>
                <TableCell className="p-1 border bg-yellow-200 font-bold">{order.date}</TableCell>
                <TableCell className="p-1 border bg-yellow-200">{order.deliveryDate}</TableCell>
                <TableCell className="p-1 border text-center">{order.deliWeek}</TableCell>
                <TableCell className="p-1 border text-center">{order.deliYear}</TableCell>
                <TableCell className="p-1 border text-right">{order.kg}</TableCell>
                <TableCell className="p-1 border text-right">{order.deliveredExKg}</TableCell>
                <TableCell className="p-1 border text-right">{order.pendingExKg}</TableCell>
                <TableCell className="p-1 border text-right">{order.localCurTotal}</TableCell>
                <TableCell className="p-1 border text-right">{order.total}</TableCell>
                <TableCell className="p-1 border">{order.curr}</TableCell>
                <TableCell className="p-1 border">{order.depa}</TableCell>
                <TableCell className="p-1 border">{order.wareh}</TableCell>
                <TableCell className="p-1 border">{order.createdUser}</TableCell>
                <TableCell className="p-1 border">{order.rm}</TableCell>
                <TableCell className="p-1 border">{order.prodConf}</TableCell>
                <TableCell className="p-1 border">{order.st}</TableCell>
                <TableCell className="p-1 border"><StatusIndicator color={order.statusColor} /></TableCell>
                <TableCell className="p-1 border">{order.an}</TableCell>
                <TableCell className="p-1 border"><StatusIndicator color="bg-green-500" /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
