import { Button, Card, Table } from './components';
import './App.css';

interface Applicant {
  id: number;
  name: string;
  product: string;
  amount: string;
  status: string;
}

const applicants: Applicant[] = [
  { id: 1, name: 'Asha Rao', product: 'Home Loan', amount: '₹45,00,000', status: 'Approved' },
  { id: 2, name: 'Vikram Shah', product: 'Personal Loan', amount: '₹3,50,000', status: 'In review' },
  { id: 3, name: 'Meera Iyer', product: 'Auto Loan', amount: '₹8,20,000', status: 'Pending docs' },
  { id: 4, name: 'Rohan Gupta', product: 'Business Loan', amount: '₹25,00,000', status: 'Approved' },
  { id: 5, name: 'Neha Kulkarni', product: 'Home Loan', amount: '₹60,00,000', status: 'Rejected' },
  { id: 6, name: 'Arjun Mehta', product: 'Personal Loan', amount: '₹2,00,000', status: 'In review' },
  { id: 7, name: 'Priya Nair', product: 'Gold Loan', amount: '₹1,50,000', status: 'Approved' },
  { id: 8, name: 'Karan Joshi', product: 'Auto Loan', amount: '₹6,75,000', status: 'Pending docs' },
];

export default function App() {
  return (
    <main className="app">
      <h1>Figma React Demo</h1>
      <div className="app__cards">
        <Card title="Applications" subtitle="This month" footer={<Button variant="secondary">View all</Button>}>
          <strong className="app__stat">128</strong>
        </Card>
        <Card title="Approved" subtitle="This month" footer={<Button>Export</Button>}>
          <strong className="app__stat">94</strong>
        </Card>
      </div>
      <Table<Applicant>
        columns={[
          { key: 'name', header: 'Name' },
          { key: 'product', header: 'Product' },
          { key: 'amount', header: 'Amount' },
          { key: 'status', header: 'Status' },
        ]}
        rows={applicants}
        pageSize={3}
      />
    </main>
  );
}
