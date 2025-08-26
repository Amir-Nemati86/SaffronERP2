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

const qualityChecks = [
  {
    checkId: 'QC-01-A23',
    jobId: 'JOB-0781',
    stage: 'Extrusion',
    parameter: 'Surface Finish',
    result: 'Pass',
    inspector: 'J. Doe',
  },
  {
    checkId: 'QC-01-B45',
    jobId: 'JOB-0781',
    stage: 'Anodizing',
    parameter: 'Thickness',
    result: 'Pass',
    inspector: 'J. Doe',
  },
  {
    checkId: 'QC-02-C12',
    jobId: 'JOB-0782',
    stage: 'Extrusion',
    parameter: 'Dimensional Tolerance',
    result: 'Fail',
    inspector: 'A. Smith',
  },
  {
    checkId: 'QC-02-D88',
    jobId: 'JOB-0782',
    stage: 'Extrusion',
    parameter: 'Hardness',
    result: 'Pending',
    inspector: 'A. Smith',
  },
];

export default function QualityPage() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Quality Control</CardTitle>
            <CardDescription>
              Oversee quality control processes throughout manufacturing.
            </CardDescription>
          </div>
          <Button>New QC Check</Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table className="border-collapse">
          <TableHeader>
            <TableRow>
              <TableHead className="border">Check ID</TableHead>
              <TableHead className="border">Job ID</TableHead>
              <TableHead className="border">Stage</TableHead>
              <TableHead className="border">Parameter</TableHead>
              <TableHead className="border">Result</TableHead>
              <TableHead className="border">Inspector</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {qualityChecks.map((check) => (
              <TableRow key={check.checkId}>
                <TableCell className="font-medium border">{check.checkId}</TableCell>
                <TableCell className="border">{check.jobId}</TableCell>
                <TableCell className="border">{check.stage}</TableCell>
                <TableCell className="border">{check.parameter}</TableCell>
                <TableCell className="border">
                  <Badge
                    variant={
                      check.result === 'Pass'
                        ? 'default'
                        : check.result === 'Fail'
                        ? 'destructive'
                        : 'secondary'
                    }
                    className={`${check.result === 'Pass' ? 'bg-green-700' : ''}`}
                  >
                    {check.result}
                  </Badge>
                </TableCell>
                <TableCell className="border">{check.inspector}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
