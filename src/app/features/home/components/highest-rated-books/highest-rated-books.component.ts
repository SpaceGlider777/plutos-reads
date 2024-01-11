import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { Book } from 'src/app/core/models/book';

@Component({
  selector: 'app-highest-rated-books',
  templateUrl: './highest-rated-books.component.html',
  styleUrls: ['./highest-rated-books.component.scss']
})
export class HighestRatedBooksComponent implements OnInit {
  books?: Book[];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.get('highest-rated').subscribe(data => {
      this.books = data;
    });
  }

  goToProduct(isbn: string): void {
    this.router.navigate([`product/${isbn}`])
  }

}
