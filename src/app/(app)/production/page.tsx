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
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

const productionSchedule = [
  {
    jobId: 'JOB-0781',
    orderId: 'ORD-001',
    dieId: 'DIE-10A4',
    press: 'P-01',
    startTime: '2023-10-26 08:00',
    status: 'Completed',
    progress: 100,
  },
  {
    jobId: 'JOB-0782',
    orderId: 'ORD-002',
    dieId: 'DIE-22B1',
    press: 'P-02',
    startTime: '2023-10-26 10:00',
    status: 'In Progress',
    progress: 60,
  },
  {
    jobId: 'JOB-0783',
    orderId: 'ORD-003',
    dieId: 'DIE-18D3',
    press: 'P-01',
    startTime: '2023-10-26 14:00',
    status: 'Queued',
    progress: 0,
  },
  {
    jobId: 'JOB-0784',
    orderId: 'ORD-005',
    dieId: 'DIE-10A4',
    press: 'P-03',
    startTime: '2023-10-27 09:00',
    status: 'Scheduled',
    progress: 0,
  },
];

export default function ProductionPage() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Production Planning</CardTitle>
            <CardDescription>
              Organize die production and related processes.
            </CardDescription>
          </div>
          <Button>Schedule New Job</Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table className="border-collapse">
          <TableHeader>
            <TableRow>
              <TableHead className="border">Job ID</TableHead>
              <TableHead className="border">Order ID</TableHead>
              <TableHead className="border">Die ID</TableHead>
              <TableHead className="border">Press</TableHead>
              <TableHead className="border">Start Time</TableHead>
              <TableHead className="border">Status</TableHead>
              <TableHead className="border">Progress</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {productionSchedule.map((job) => (
              <TableRow key={job.jobId}>
                <TableCell className="font-medium border">{job.jobId}</TableCell>
                <TableCell className="border">{job.orderId}</TableCell>
                <TableCell className="border">{job.dieId}</TableCell>
                <TableCell className="border">{job.press}</TableCell>
                <TableCell className="border">{job.startTime}</TableCell>
                <TableCell className="border">{job.status}</TableCell>
                <TableCell className="border">
                  <div className="flex items-center gap-2">
                    <Progress value={job.progress} className="w-32" />
                    <span>{job.progress}%</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
