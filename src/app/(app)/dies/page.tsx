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
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const dieProfiles = [
  {
    id: 'DIE-10A4',
    description: '4" Window Frame Profile',
    cavities: 2,
    status: 'Active',
    location: 'Rack 12-A',
  },
  {
    id: 'DIE-22B1',
    description: '2.5" T-Slot Profile',
    cavities: 4,
    status: 'Active',
    location: 'Rack 03-C',
  },
  {
    id: 'DIE-05C9',
    description: 'Heat Sink Standard',
    cavities: 1,
    status: 'Maintenance',
    location: 'Workshop',
  },
  {
    id: 'DIE-18D3',
    description: 'Door Frame Seal Channel',
    cavities: 2,
    status: 'Active',
    location: 'Rack 08-B',
  },
  {
    id: 'DIE-31F7',
    description: 'Custom Angle Bracket',
    cavities: 8,
    status: 'Inactive',
    location: 'Storage-02',
  },
];

export default function DiesPage() {
  return (
    <Card className="rounded-none">
      <CardHeader>
        <div className="flex items-center justify-between">
            <CardTitle>DIE CARDS</CardTitle>
          <div className="flex items-center gap-2">
            <Input placeholder="Search Die ID..." className="w-48 rounded-none" />
            <Button className="rounded-none">Add New Die</Button>
          </div>
        </div>
         <CardDescription>
              Drag a column header here to group by that column
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table className="border-collapse">
          <TableHeader>
            <TableRow>
              <TableHead className="border">Die ID</TableHead>
              <TableHead className="border">Description</TableHead>
              <TableHead className="border">Cavities</TableHead>
              <TableHead className="border">Status</TableHead>
              <TableHead className="border">Location</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dieProfiles.map((die) => (
              <TableRow key={die.id}>
                <TableCell className="font-medium border">{die.id}</TableCell>
                <TableCell className="border">{die.description}</TableCell>
                <TableCell className="border">{die.cavities}</TableCell>
                <TableCell className="border">{die.status}</TableCell>
                <TableCell className="border">{die.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
