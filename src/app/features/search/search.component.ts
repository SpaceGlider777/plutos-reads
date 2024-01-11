import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { Book } from 'src/app/core/models/book';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  books?: Book[];
  currentBooks?: Book[];
  isBooksEmpty: boolean = false;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => { return false; };
  }

  ngOnInit(): void {
    const searchStr = this.route.snapshot.paramMap.get('searchStr');

    this.apiService.get(`search/${searchStr}`).subscribe(data => {
      this.books = data;
      this.currentBooks = this.books?.slice(0, 4);

      if (this.books?.length == 0) {
        this.isBooksEmpty = true;
      }
    });
  }

  goToProduct(isbn: string): void {
    this.router.navigate([`product/${isbn}`])
  }

  handlePageEvent(e: PageEvent): void {
    this.currentBooks = this.books?.slice(e.pageIndex * e.pageSize, e.pageIndex * e.pageSize + e.pageSize);
  }

}
