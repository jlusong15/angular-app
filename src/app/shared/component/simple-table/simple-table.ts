import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { SimpleTableColumn } from './simple-table.model';

@Component({
  selector: 'app-simple-table',
  imports: [TableModule],
  templateUrl: './simple-table.html',
  styleUrl: './simple-table.css',
  standalone: true
})
export class SimpleTable {
  @Input() columns: SimpleTableColumn[] = [];
  @Input() tableData: any;
}
