import { useMemo, useState } from 'react';
import { Button } from './Button';
import './Table.css';

export interface Column<T> {
  key: keyof T;
  header: string;
}

export interface TableProps<T> {
  columns: Column<T>[];
  rows: T[];
  pageSize?: number;
}

export function Table<T extends { id: string | number }>({ columns, rows, pageSize = 5 }: TableProps<T>) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(rows.length / pageSize));
  const start = (page - 1) * pageSize;
  const visible = useMemo(() => rows.slice(start, start + pageSize), [rows, start, pageSize]);

  return (
    <div className="table">
      <div className="table__body">
        <table>
          <thead>
            <tr>{columns.map((c) => <th key={String(c.key)}>{c.header}</th>)}</tr>
          </thead>
          <tbody>
            {visible.map((row) => (
              <tr key={row.id}>
                {columns.map((c) => <td key={String(c.key)}>{String(row[c.key])}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table__footer">
        <span className="table__summary">
          Showing {rows.length ? start + 1 : 0}–{Math.min(start + pageSize, rows.length)} of {rows.length}
        </span>
        <div className="table__pages">
          <Button size="sm" variant="ghost" disabled={page === 1} onClick={() => setPage(page - 1)}>‹</Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <Button key={n} size="sm" variant={n === page ? 'primary' : 'ghost'} onClick={() => setPage(n)}>
              {n}
            </Button>
          ))}
          <Button size="sm" variant="ghost" disabled={page === totalPages} onClick={() => setPage(page + 1)}>›</Button>
        </div>
      </div>
    </div>
  );
}
