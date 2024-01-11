import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { Book } from 'src/app/core/models/book';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  book?: Book;
  recommendations?: Book[];
  hasRecommendations: boolean = true;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => { return false; };
  }

  ngOnInit(): void {
    const isbn = this.route.snapshot.paramMap.get('isbn');

    this.apiService.get(`book/${isbn}`).subscribe(data => {
      this.book = data[0];
    });

    this.apiService.get(`recommendations/${isbn}`).subscribe(data => {
      this.recommendations = data;

      if (this.recommendations?.length == 0) {
        this.hasRecommendations = false;
      }
    });
  }

  goToProduct(isbn: string): void {
    this.router.navigate([`product/${isbn}`]);
  }

}
