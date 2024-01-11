import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { Book } from 'src/app/core/models/book';

@Component({
  selector: 'app-popular-books',
  templateUrl: './popular-books.component.html',
  styleUrls: ['./popular-books.component.scss']
})
export class PopularBooksComponent implements OnInit {
  books?: Book[];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.get('popular').subscribe(data => {
      this.books = data;
    });
  }

  goToProduct(isbn: string): void {
    this.router.navigate([`product/${isbn}`])
  }

}
