import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
    <div class="flex">
      <button
        *ngFor="let page of pages"
        class="px-3 py-1 border rounded mx-1"
        [class.bg-blue-500]="currentPage === page"
        (click)="changePage(page)"
      >
        {{ page }}
      </button>
    </div>
  `
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Output() pageChanged = new EventEmitter<number>();

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  changePage(page: number): void {
    this.pageChanged.emit(page);
  }
}
