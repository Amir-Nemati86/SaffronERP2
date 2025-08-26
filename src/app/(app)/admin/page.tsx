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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const users = [
  {
    id: 'USR-001',
    name: 'John Doe',
    email: 'j.doe@example.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 'USR-002',
    name: 'Jane Smith',
    email: 'j.smith@example.com',
    role: 'Sales Manager',
    status: 'Active',
  },
  {
    id: 'USR-003',
    name: 'Mike Johnson',
    email: 'm.johnson@example.com',
    role: 'Production Planner',
    status: 'Inactive',
  },
];

export default function AdminPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Admin Panel</CardTitle>
        <CardDescription>
          Configure definitions, settings, and user access rights.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="users">
          <TabsList>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="definitions">Definitions</TabsTrigger>
            <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
          </TabsList>
          <TabsContent value="users" className="mt-4">
            <div className="flex justify-end mb-4">
              <Button>Add New User</Button>
            </div>
            <Table className="border-collapse">
              <TableHeader>
                <TableRow>
                  <TableHead className="border">User ID</TableHead>
                  <TableHead className="border">Name</TableHead>
                  <TableHead className="border">Email</TableHead>
                  <TableHead className="border">Role</TableHead>
                  <TableHead className="border">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="border">{user.id}</TableCell>
                    <TableCell className="border">{user.name}</TableCell>
                    <TableCell className="border">{user.email}</TableCell>
                    <TableCell className="border">{user.role}</TableCell>
                    <TableCell className="border">
                      <Badge
                        variant={user.status === 'Active' ? 'default' : 'secondary'}
                        className={user.status === 'Active' ? 'bg-green-700' : ''}
                      >
                        {user.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="definitions" className="mt-4">
            <p className="text-muted-foreground">
              System definitions and configurations will be managed here.
            </p>
          </TabsContent>
          <TabsContent value="roles" className="mt-4">
            <p className="text-muted-foreground">
              User roles and access permissions will be managed here.
            </p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
