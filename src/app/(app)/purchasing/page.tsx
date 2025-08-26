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
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const purchaseOrders = [
  {
    id: 'PO-2023-051',
    supplier: 'AlumSource Global',
    item: 'Aluminum Billets 6063',
    quantity: '20 MT',
    date: '2023-10-20',
    status: 'Delivered',
  },
  {
    id: 'PO-2023-052',
    supplier: 'Chem-Coatings LLC',
    item: 'Powder Coat - RAL 9001',
    quantity: '500 kg',
    date: '2023-10-22',
    status: 'In Transit',
  },
  {
    id: 'PO-2023-053',
    supplier: 'Industrial Parts Co.',
    item: 'Press Maintenance Kit',
    quantity: '2 units',
    date: '2023-10-24',
    status: 'Ordered',
  },
  {
    id: 'PO-2023-054',
    supplier: 'AlumSource Global',
    item: 'Aluminum Billets 6061',
    quantity: '15 MT',
    date: '2023-10-25',
    status: 'Ordered',
  },
];

export default function PurchasingPage() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Purchase Management</CardTitle>
            <CardDescription>
              Handle purchase orders and material requests.
            </CardDescription>
          </div>
          <Button>New Purchase Order</Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table className="border-collapse">
          <TableHeader>
            <TableRow>
              <TableHead className="border">PO Number</TableHead>
              <TableHead className="border">Supplier</TableHead>
              <TableHead className="border">Item</TableHead>
              <TableHead className="border">Quantity</TableHead>
              <TableHead className="border">Date</TableHead>
              <TableHead className="border">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {purchaseOrders.map((po) => (
              <TableRow key={po.id}>
                <TableCell className="font-medium border">{po.id}</TableCell>
                <TableCell className="border">{po.supplier}</TableCell>
                <TableCell className="border">{po.item}</TableCell>
                <TableCell className="border">{po.quantity}</TableCell>
                <TableCell className="border">{po.date}</TableCell>
                <TableCell className="border">
                  <Badge variant="secondary">{po.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
