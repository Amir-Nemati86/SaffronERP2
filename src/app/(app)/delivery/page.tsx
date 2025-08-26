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

const deliveries = [
  {
    trackingId: 'TRK-98127',
    orderId: 'ORD-001',
    customer: 'AluCorp',
    destination: 'New York, NY',
    dispatchDate: '2023-10-27',
    status: 'In Transit',
  },
  {
    trackingId: 'TRK-98128',
    orderId: 'ORD-003',
    customer: 'WindowMakers Ltd.',
    destination: 'Chicago, IL',
    dispatchDate: '2023-10-27',
    status: 'Preparing',
  },
  {
    trackingId: 'TRK-98125',
    orderId: 'ORD-005',
    customer: 'AluCorp',
    destination: 'Boston, MA',
    dispatchDate: '2023-10-24',
    status: 'Delivered',
  },
];

export default function DeliveryPage() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Delivery Tracking</CardTitle>
            <CardDescription>
              Monitor and manage product deliveries.
            </CardDescription>
          </div>
          <Button>Log New Delivery</Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table className="border-collapse">
          <TableHeader>
            <TableRow>
              <TableHead className="border">Tracking ID</TableHead>
              <TableHead className="border">Order ID</TableHead>
              <TableHead className="border">Customer</TableHead>
              <TableHead className="border">Destination</TableHead>
              <TableHead className="border">Dispatch Date</TableHead>
              <TableHead className="border">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {deliveries.map((delivery) => (
              <TableRow key={delivery.trackingId}>
                <TableCell className="font-medium border">
                  {delivery.trackingId}
                </TableCell>
                <TableCell className="border">{delivery.orderId}</TableCell>
                <TableCell className="border">{delivery.customer}</TableCell>
                <TableCell className="border">{delivery.destination}</TableCell>
                <TableCell className="border">{delivery.dispatchDate}</TableCell>
                <TableCell className="border">
                  <Badge
                    className={
                      delivery.status === 'Delivered'
                        ? 'bg-green-700 text-white'
                        : ''
                    }
                  >
                    {delivery.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
